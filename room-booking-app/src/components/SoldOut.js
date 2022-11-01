import React, { useState } from "react";

function SoldOut({ message }) {
  return (
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Sorry!!</strong> {message}
      {/* <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button> */}
    </div>
  );
}

export default SoldOut;
