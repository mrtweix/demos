export const processPhoto = (event) => {
  const file = document.querySelector("#photo").files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (event) => {
    const imgElement = document.createElement("img");
    imgElement.src = event.target.result;
    document.querySelector("#input").src = event.target.result;
    imgElement.onload = (e) => {
      const canvas = document.createElement("canvas");
      const MAX_WIDTH = 500;
      const scaleSize = MAX_WIDTH / e.target.width;
      canvas.width = MAX_WIDTH;
      canvas.height = e.target.height * scaleSize;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);
      const srcEncoded = ctx.canvas.toDataURL(e.target, "image/jpeg");
      document.querySelector("#output").src = srcEncoded;
      console.log(srcEncoded);
    };
    // console.log(imgElement);
  };
};

const PhotoSize = () => {
  return (
    <>
      <input
        type="file"
        name="photo"
        id="photo"
        accept=".jpg, .jpeg, .png, .bmp, .tiff, .gif"
      />
      <button type="button" onClick={processPhoto}>
        Upload Photo
      </button>
      <div>
        <img alt="" id="input" />
      </div>
      <div>
        <img alt="" id="output" />
      </div>
    </>
  );
};

export default PhotoSize;
