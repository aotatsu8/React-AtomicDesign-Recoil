import styled from "styled-components";
// import { SeconderyButton } from "../atoms/button/SeconderyButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
// import { useRecoilState } from "recoil";
// import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `はち${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "hachi8@aaa.com",
    phone: "080-6666-1111",
    company: {
      name: "test株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  // const [userInfo, setUserInfo] = useRecoilState(userState);

  // const onClickSwich = () => setUserInfo({!userInfo.isAdmin});

  return (
    <SConponent>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      {/* <br /> */}
      {/* <SeconderyButton onClick={onClickSwich}>切り替え</SeconderyButton> */}
      <SUserArea>
        {users.map((user) => {
          return <UserCard key={users.id} user={user} />;
        })}
      </SUserArea>
    </SConponent>
  );
};

const SConponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
