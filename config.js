const oa_name = "徐大兵";
const oa_description = "分享车机与科技生活";

function replaceText(elementId, newText) {
  var element = document.getElementById(elementId);
  if (element) {
      element.innerText = newText;
  } else {
      console.log("Element with ID '" + elementId + "' not found.");
  }
}

replaceText('wechatOA-name', oa_name);
replaceText('wechatOA-description', oa_description)
replaceText('web-beian', web_beian)