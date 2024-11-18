export default function Profile(props){
    return(
        <div>
            <table>
                <tr>
                    <td rowSpan={?}>
                    <img src={require("../components/assests/profilepic/1.jpg")} alt="ProfilePicture"/>
                    </td>
                    <td>ID {props.}</td>
                </tr>
            </table>
        </div>
    );
}