"use strict";const nameElement=document.querySelector(".js-name"),namePreviewElement=document.querySelector(".js-namePreview");function handleName(e){const n=e.target.value;namePreviewElement.innerHTML=""===n?"Nombre Apellido":n}nameElement.addEventListener("keyup",handleName);const positionElement=document.querySelector(".js-position"),positionPreviewElement=document.querySelector(".js-positionPreview");function handlePosition(e){const n=e.target.value;positionPreviewElement.innerHTML=""===n?"Front-end developer":n}positionElement.addEventListener("keyup",handlePosition);const emailElement=document.querySelector(".js-email"),emailPreviewElement=document.querySelector(".js-emailPreview");function handleEmail(e){const n=e.target.value;""===n?(console.log("estoy vacio"),emailPreviewElement.href=""):(console.log("estoy relleno"),emailPreviewElement.href="mailto:"+n)}emailElement.addEventListener("keyup",handleEmail);const phoneElement=document.querySelector(".js-phone"),phonePreviewElement=document.querySelector(".js-phonePreview");function handlePhone(e){const n=e.target.value;phonePreviewElement.href=""===n?"":"tel:"+n}phoneElement.addEventListener("keyup",handlePhone);const linkedinElement=document.querySelector(".js-linkedin"),linkedinPreviewElement=document.querySelector(".js-linkedinPreview");function handlelinkedin(e){const n=e.target.value;""===n?(console.log("estoy vacio"),linkedinPreviewElement.href=""):(console.log("estoy relleno"),linkedinPreviewElement.href=n)}linkedinElement.addEventListener("keyup",handlelinkedin);const githubElement=document.querySelector(".js-github"),githubPreviewElement=document.querySelector(".js-githubPreview");function handleGithub(e){const n=e.target.value;""===n?(console.log("estoy vacio"),githubPreviewElement.href=""):(console.log("estoy relleno"),githubPreviewElement.href=n)}githubElement.addEventListener("keyup",handleGithub);const collapsable=document.querySelector(".js-slide"),collapsableHeader=document.querySelector(".collapsable__header");function show(){collapsable.classList.toggle("collapsable--close")}collapsableHeader.addEventListener("click",show);