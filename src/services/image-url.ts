import hamimi from "../assets/hamimi.jpg";

const getCroppedImageUrl = (url: string) => {
  if (!url) return hamimi;
  const target = "media/";
  //get the index of the media/ keyword plus it's length to add the intended
  //text after it to crop the image to 600/400. for image optimization.
  const index = url.indexOf(target) + target.length;
  //return the url from start till media/ and add the below string and add
  //the remaining url too from index till end to complete the url.
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default getCroppedImageUrl;
