import React, { useState, Fragment} from 'react'
import AddUser from './form/add-form'
import EditUser from './form/edit-form'
import UserTable from './table/user-table'

const App = () => {

	const usersData = [
		{ id: 1, name: 'Name1', username: 'username1' },
		{ id: 2, name: 'Name2', username: 'username2' },
		{ id: 3, name: 'Name3', username: 'username3' },
	]

	const formState = { id: null, name: '', username: '' }

	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(formState)
	const [ editing, setEditing ] = useState(false)


	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
			<h1>CRUD React</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit User</h2>
							<EditUser
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add User</h2>
							<AddUser addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>Users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App