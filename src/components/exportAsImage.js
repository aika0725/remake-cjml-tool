import html2canvas from 'html2canvas'


export const exportAsImage = async (element, imageFileName) => {

    const elementWidth = element.scrollWidth +20
    console.log({elementWidth})
    console.log({element})
   html2canvas(element, { width: elementWidth }).then((el)=>{
    console.log(el)
     const image = el.toDataURL('image/png', 1.0);
     downloadImage(image, imageFileName);

   })
  // console.log({canvas, image})
    
    };

    const downloadImage = (blob, fileName) => {
      const fakeLink = window.document.createElement('a');
      fakeLink.style = 'display:none;';
      fakeLink.download = fileName;
      
      fakeLink.href = blob;
      
      document.body.appendChild(fakeLink);
      fakeLink.click();
      document.body.removeChild(fakeLink);
      
      fakeLink.remove();
      };


