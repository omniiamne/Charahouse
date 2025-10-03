/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  let dex = await charadex.initialize.page(
    null,
    charadex.page.masterlist,
    null, 
    async (listData) => {

      if (listData.type == 'profile') {

        // Create the image gallery
  if (charadex.tools.checkArray(listData.profileArray[0].imagegallery)) {
    let gallery = await charadex.initialize.page(
      listData.profileArray[0].imagegallery,
      charadex.page.masterlist.relatedData['image gallery']
    );
  }

        // Create the log dex
        if (charadex.tools.checkArray(listData.profileArray[0].masterlistlog)) {
          let logs = await charadex.initialize.page(
            listData.profileArray[0].masterlistlog,
            charadex.page.masterlist.relatedData['masterlist log']
          );
        }

      }

    }
  );
  
  charadex.tools.loadPage('.softload', 500);
  
});
