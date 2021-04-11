export const options = [
  { value: "Apple", label: "Apple" },
  { value: "Apricots", label: "Apricots" },
  { value: "Avocado", label: "Avocado" },
  { value: "Banana", label: "Banana" },
  { value: "Blackberries", label: "Blackberries" },
  { value: "Blueberries", label: "Blueberries" },
  { value: "Cherries", label: "Cherries" },
  { value: "Cranberries", label: "Cranberries" },
  { value: "Gooseberries", label: "Gooseberries" },
  { value: "Grapefruit", label: "Grapefruit" },
  { value: "Grapes", label: "Grapes" },
  { value: "Guava", label: "Guava" },
  { value: "Kiwifruit", label: "Kiwifruit" },
  { value: "Lychee", label: "Lychee" },
  { value: "Mango", label: "Mango" },
  { value: "Orange", label: "Orange" },
  { value: "Papaya", label: "Papaya" },
  { value: "Peaches", label: "Peaches" },
  { value: "Pineapple", label: "Pineapple" },
  { value: "Pomegranate", label: "Pomegranate" },
  { value: "Raspberries", label: "Raspberries" },
  { value: "Strawberries", label: "Strawberries" },
  { value: "Watermelon", label: "Watermelon" },
];

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
