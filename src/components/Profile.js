export default function Profile(props){
    console.log(props.stu)
    return(
        <div>
            <table>
                <tr>
                    <td rowSpan={7}>
                    <img className="profile" src={require('../components/assests/profilepic/'+props.stu.profilePic)} alt="ProfilePicture"/>
                    </td>
                    <td>ID {props.stu.studentId} </td>
                </tr>
                <tr>
                    <td>Full name :{props.stu.firstName + " " + props.stu.lastName}</td>
                </tr>
                <tr>
                    <td>Age :{props.stu.age}</td>
                </tr>
                <tr>
                    <td>Course :{props.stu.course}</td>
                </tr>
                <tr>
                    <td>Address :{props.stu.address.city + " " + props.stu.address.country}</td>
                </tr>
                <tr>
                    <td>Skills :{props.stu.skills.map(skill=>skill+=",")}</td>
                </tr>

            </table>
        </div>
    );
}