import React from "react";

const CatTinderNotFound = () => {
  return (
    <div className="not-found-container">
      <img src="cat_not_found_image_url" alt="Cat Not Found" />
      <h1>Meow! Cat Not Found!</h1>
      <p>Sorry, it seems like this cat has already been adopted or doesn't exist.</p>
      <p>Try swiping right on other adorable cats!</p>
      {/* You can add a button to redirect users to the main page */}
      {/* <button onClick={() => history.push("/")}>Go Back to Main Page</button> */}
    </div>
  );
};

export default CatTinderNotFound;