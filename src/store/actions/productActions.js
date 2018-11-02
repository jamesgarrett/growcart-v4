export const createProduct = (product) => {
	return (dispatch, getState, {  getFirebase, getFirestore }) => {
		// make async call to database
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;
		firestore.collection('products').add({
			...product,
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId: authorId,
			createdAt: new Date()
		}).then(() => {
			dispatch({ type: 'CREATE_PRODUCT', product });
		}).catch((err) => {
			dispatch({ type: 'CREATE_PRODUCT_ERROR', err });
		})
	}
};