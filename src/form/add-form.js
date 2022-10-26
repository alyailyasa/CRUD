import React, { useState } from 'react';

const AddUser = props => {
	const addUserState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(addUserState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return
				props.addUser(user)
				setUser(addUserState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Username</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<button>Add New</button>
		</form>
	)
}

export default AddUser