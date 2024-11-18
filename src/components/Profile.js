export default function Profile(props){
    return(
        <div>
            <table>
                <tr>
                    <td rowSpan={7}>
                    <img className="profile" src={require("../components/assests/profilepic/1.jpg")} alt="ProfilePicture"/>
                    </td>
                    <td>ID {props.stu.studentId} </td>
                </tr>
            </table>
        </div>
    );
}