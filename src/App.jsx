import { useReducer } from "react";
import gallerey from "./data";

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_LIKE":
      return state.map((image) => {
        if (image.id == payload) {
          return { ...image, likes: image.likes + 1 };
        } else {
          return image;
        }
      });
    case "ADD_DISLIKE":
      return state.map((image) => {
        if (image.id == payload) {
          return { ...image, disLikes: image.disLikes + 1 };
        } else {
          return image;
        }
      });
    case "DELETE":
      return state.filter((image) => image.id != payload);
    default:
      return state;
  }
};

function App() {
  const [images, dispatch] = useReducer(changeState, gallerey);

  return (
    <div className="images-container">
      {images.map((image) => {
        return (
          <div key={image.id}>
            <img src={image.url} alt="" />
            <div className="buttons-container">
              <button
                onClick={() =>
                  dispatch({ type: "ADD_LIKE", payload: image.id })
                }
              >
                👍 {image.likes}
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "ADD_DISLIKE", payload: image.id })
                }
              >
                👎 {image.disLikes}
              </button>
              <button
                onClick={() => dispatch({ type: "DELETE", payload: image.id })}
              >
                🗑
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;

// useState() bilan

// function App() {
//   const [images, setImages] = useState(gallerey);

//   const addLike = (id) => {
//     const updatedImages = images.map((image) => {
//       if (id === image.id) {
//         return { ...image, likes: image.likes + 1 };
//       } else {
//         return image;
//       }
//     });
//     setImages(updatedImages);
//   };

//   const addDislike = (id) => {
//     const updatedImages = images.map((image) => {
//       if (id === image.id) {
//         return { ...image, disLikes: image.disLikes + 1 };
//       } else {
//         return image;
//       }
//     });
//     setImages(updatedImages);
//   };

//   const deleteImage = (id) => {
//     const updatedImages = images.filter((image) => id !== image.id);
//     setImages(updatedImages);
//   };

//   return (
//     <div className="images-container">
//       {images.map((image) => {
//         return (
//           <div key={image.id}>
//             <img src={image.url} alt="" />
//             <div className="buttons-container">
//               <button onClick={() => addLike(image.id)}>
//                 👍 {image.likes}
//               </button>
//               <button onClick={() => addDislike(image.id)}>
//                 👎 {image.disLikes}
//               </button>
//               <button onClick={() => deleteImage(image.id)}>🗑</button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;
