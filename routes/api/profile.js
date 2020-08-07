// const express = require("express");
// const aws = require("aws-sdk");
// const multerS3 = require("multer-s3");
// const multer = require("multer");
// const path = require("path");
// const User = require('../../models/User');

// // const url = require("url");

// const router = express.Router();

// const keys = require("../../config/keys");

// const s3 = new aws.S3({
//   accessKeyId: keys.accessKeyId,
//   secretAccessKey: keys.secretAccessKey,
//   Bucket: keys.Bucket,
// });

// const profileImgUpload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: "fit-book-bucket",
//     acl: "public-read",
//     key: function (req, file, cb) {
//       cb(
//         null,
//         path.basename(file.originalname, path.extname(file.originalname)) +
//           "-" +
//           Date.now() +
//           path.extname(file.originalname)
//       );
//     },
//   }),
//   limits: { fileSize: 3000000 }, // In bytes: 2000000 bytes = 3 MB
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// }).single("profileImage");

// function checkFileType( file, cb ){
// 	// Allowed ext
// 	const filetypes = /jpeg|jpg|png|gif/;
// 	// Check ext
// 	const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
// 	// Check mime
// 	const mimetype = filetypes.test( file.mimetype );
// 	if( mimetype && extname ){
// 		return cb( null, true );
// 	} else {
// 		cb( 'Error: Images Only!' );
// 	}
// }


// router.post( '/:id/profile-img-upload', ( req, res ) => {
// 	profileImgUpload( req, res, ( error ) => {
// 		console.log( 'requestOkokok', req.file );
// 		console.log( 'error', error );
// 		if( error ){
// 			console.log( 'errors', error );
// 			res.json( { error: error } );
// 		} else {
// 			// If File not found
// 			if( req.file === undefined ){
// 				console.log( 'Error: No File Selected!' );
// 				res.json( 'Error: No File Selected' );
// 			} else {
// 				// If Success
// 				const imageName = req.file.key;
// 				const imageLocation = req.file.location;
// // Save the file name into database into profile model
// 				// debugger

				
// 				res.json( {
// 					image: imageName,
// 					location: imageLocation
// 				} );

			
// 			}
// 		}
// 	});
// });


// // We export the router so that the server.js file can pick it up
// module.exports = router;