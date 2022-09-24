import html2canvas from 'html2canvas'

export const exportAsImage = async (element, imageFileName) => {
  html2canvas(element, {
    windowWidth: window.outerWidth + window.innerWidth,
    windowHeight: window.innerHeight,
    scrollX: -window.scrollX,
    scrollY: -window.scrollY,
  }).then((el) => {
    const image = el.toDataURL('image/png', 1.0)
    downloadImage(image, imageFileName)
  })
}

const downloadImage = (blob, fileName) => {
  const fakeLink = window.document.createElement('a')
  fakeLink.style.cssText = 'display:none;'
  fakeLink.download = fileName

  fakeLink.href = blob

  document.body.appendChild(fakeLink)
  fakeLink.click()
  document.body.removeChild(fakeLink)

  fakeLink.remove()
}
