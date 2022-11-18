export const exportAsXML = (values) => {

  const elementsActor = ()=>{
    let actorData = ''
    values.actors.map((actor)=>{
      actorData+= `<actor id=${actor.id} name=${actor.actorName} role=${actor.actorRole}/>`
      // console.log(`<Actor name=${actor.actorName} role=${actor.actorRole}/>`)
    })
    return(actorData)
  }

  const elementsTouchpoint = ()=>{
    let touchpointData = ''
    values.touchpoints.map((touchpoint)=>{
      if (touchpoint.type === 'action'){
        touchpointData+=`
        <action initiatorId=${touchpoint.initiatorID} riskCategory=${touchpoint.touchpointDescription.riskCategory} time=${touchpoint.touchpointDescription.time}>
        ${touchpoint.touchpointDescription.actionDescription}
        </action>`
      } else {
        touchpointData+=`
        <communicationPoint senderId =${touchpoint.senderID} receiverId = ${touchpoint.receiverID} time=${touchpoint.touchpointDescription.time} >
          <sender  riskCategory=${touchpoint.touchpointDescription.senderRiskCategory}>
          ${touchpoint.touchpointDescription.senderDescription}
          </sender>
          <receiver  riskCategory=${touchpoint.touchpointDescription.receiverRiskCategory}>
          ${touchpoint.touchpointDescription.receiverDescription}
          </receiver>
        </communicationPoint>`
      }
    })
    return (touchpointData)
  }

  const displayXML = `
  <cjml>
    <actors>
    ${elementsActor()}
    <actors>
    <touchpoints>
    ${elementsTouchpoint()}
    </touchpoints>
  </cjml>
  `
  // console.log(displayXML)

  // const elementXML = ReactDomServer.renderToStaticMarkup(
  //   displayXML
   
  // )

  console.log(displayXML);


  downloadData('text/xml', displayXML, 'CJML_swimlane.xml');
}

const downloadData = (contentType, data, filename)=>{
  const link = document.createElement('A');
  link.setAttribute('href', encodeURI('data:' + contentType + ',' + data));
  link.setAttribute('style', 'display:none');
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  setTimeout(function () {
      document.body.removeChild(link);
  }, 1000);
}



