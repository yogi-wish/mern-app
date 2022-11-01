import React, { useState } from "react";

function Success({ message }) {
  return (
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Hurray!!</strong> {message}
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

export default Success;
