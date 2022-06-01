import React from 'react';
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown'



class TableData extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Loading... </h1> </div> ;

		return (
            
            <Table  >
            <thead>
                <tr>
                <th><Dropdown className="d-inline mx-2">
    			<Dropdown.Toggle id="dropdown-autoclose-true">
     			 First Name
    			</Dropdown.Toggle>
				<Dropdown.Menu>
				<Dropdown.Item href="#">Ascending</Dropdown.Item>
				<Dropdown.Item href="#">Descending</Dropdown.Item>
    			</Dropdown.Menu>
  				</Dropdown></th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Website</th>
                </tr>
            </thead>
			
			{items.map((item) => (
            <tbody>
                <tr>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td><a href={item.web} target="_blank" rel='noreferrer'>{item.web}</a></td>
                </tr>   
            </tbody>
			 ))}
            </Table>
        );
}
};

const Table = styled.table`
	border-collapse: collapse;
  	width: 100%;
	td, th {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: center;
		font-family: 'DM Sans', sans-serif;
		font-family: 'Roboto', sans-serif;
 	}
`;


export default TableData;
