import Image from 'next/image'
const UserHeaderInfor = ({username, avatar}: any) => {
    return (
        <div>
            <Image src={avatar} alt="image"/>
            <span>Bem vindo!</span>
            <p>{username}</p>
        </div>
    )
}
export default UserHeaderInfor