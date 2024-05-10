// import { useRouteError } from "react-router-dom";

// export default function NotFound() {
//   const error = useRouteError();
//   console.error(error);

//   return (
//     <div id="error-page">
//       <h1>Oops!</h1>
//       <p>Sorry, an unexpected error has occurred.</p>
//       <p>
//         <i>{error.statusText || error.message}</i>
//       </p>
//     </div>
//   );
// }

import React from "react";

function NotFound() {
	return (
		<div>
			<h1>Not found</h1>
		</div>
	);
}

export default NotFound;
