// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Wrapper from "../../elem/Wrapper";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { __addUsers } from "../../redux/modules/login/loginSlice";

// function UsersignUp() {
//     //이름, 이메일, 비밀번호, 비밀번호 확인
//     const [name, setName] = useState<string>('')
//     const [email, setEmail] = useState<string>('')
//     const [password, setPassword] = useState<string>('')
//     const [passwordConfirm, setPasswordConfirm] = useState<string>('')

//     //오류메시지 상태저장
//     const [nameMessage, setNameMessage] = useState<string>('')
//     const [emailMessage, setEmailMessage] = useState<string>('')
//     const [passwordMessage, setPasswordMessage] = useState<string>('')
//     const [passwordConfirmMessage, setPasswordConfirmMessage] = useState<string>('')

//     // 유효성 검사
//     const [isName, setIsName] = useState<boolean>(false)
//     const [isEmail, setIsEmail] = useState<boolean>(false)
//     const [isPassword, setIsPassword] = useState<boolean>(false)
//     const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false)
//     const router = useRouter()

//     const onSubmit = useCallback(
//       async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         try {
//           await axios
//             .post(REGISTER_USERS_URL, {
//               username: name,
//               password: password,
//               email: email,
//             })
//             .then((res) => {
//               console.log('response:', res)
//               if (res.status === 200) {
//                 router.push('/sign_up/profile_start')
//               }
//             })
//         } catch (err) {
//           console.error(err)
//         }
//       },
//       [email, name, password, router]
//     )

//     // 이름
//     const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//       setName(e.target.value)
//       if (e.target.value.length < 2 || e.target.value.length > 5) {
//         setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
//         setIsName(false)
//       } else {
//         setNameMessage('올바른 이름 형식입니다 :)')
//         setIsName(true)
//       }
//     }, [])

//     // 이메일
//     const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//       const emailRegex =
//         /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
//       const emailCurrent = e.target.value
//       setEmail(emailCurrent)

//       if (!emailRegex.test(emailCurrent)) {
//         setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ')
//         setIsEmail(false)
//       } else {
//         setEmailMessage('올바른 이메일 형식이에요 : )')
//         setIsEmail(true)
//       }
//     }, [])

//     // 비밀번호
//     const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//       const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
//       const passwordCurrent = e.target.value
//       setPassword(passwordCurrent)

//       if (!passwordRegex.test(passwordCurrent)) {
//         setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
//         setIsPassword(false)
//       } else {
//         setPasswordMessage('안전한 비밀번호에요 : )')
//         setIsPassword(true)
//       }
//     }, [])

//     // 비밀번호 확인
//     const onChangePasswordConfirm = useCallback(
//       (e: React.ChangeEvent<HTMLInputElement>) => {
//         const passwordConfirmCurrent = e.target.value
//         setPasswordConfirm(passwordConfirmCurrent)

//         if (password === passwordConfirmCurrent) {
//           setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 : )')
//           setIsPasswordConfirm(true)
//         } else {
//           setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ')
//           setIsPasswordConfirm(false)
//         }
//       },
//       [password]
//     )
//   return (
//     <Wrapper
//       mg="20px auto"
//       pd="30px"
//       wd="50%"
//       hg="80%"
//       inline="background: #e1eef6;"
//     >
//       <Title title="회원가입" className="loginMt" />

// <form css={selfWrap} onSubmit={onSubmit}>
//   <div className="formbox">
//     <TextField text="이름" type="text" typeName="name" onChange={onChangeName} />
//     {name.length > 0 && <span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}
//   </div>

//   <div className="formbox">
//     <TextField text="이메일" type="email" typeName="email" onChange={onChangeEmail} />
//     {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
//   </div>

//   <div className="formbox">
//     <PasswordField
//       onChange={onChangePassword}
//       passwordText="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)"
//       title="비밀번호"
//       typeTitle="password"
//     />
//     {password.length > 0 && (
//       <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>
//     )}
//   </div>

//   <div className="formbox">
//     <PasswordField
//       onChange={onChangePasswordConfirm}
//       passwordText=" "
//       title="비밀번호 확인"
//       typeTitle="passwordConfirm"
//     />
//     {passwordConfirm.length > 0 && (
//       <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
//     )}
//   </div>

//   {/* 이름, 이메일, 패스워드, 패스워드 확인이 다 맞다면 주황버튼으로 */}
//   <div css={footButtonWrapper}>
//     <section>
//       <FootButton
//         type="submit"
//         footButtonType={FootButtonType.ACTIVATION}
//         disabled={!(isName && isEmail && isPassword && isPasswordConfirm)}
//       >
//         다음
//       </FootButton>
//     </section>
//   </div>
// </form>
// </>
// )
// }

//       {isRestaurant === true ? (
//         <Modal
//           restaurantName={restaurantName}
//           setRestaurantName={setRestaurantName}
//         />
//       ) : null}
//     </Wrapper>
//   );
// }

// function Modal(props) {
//   return (
//     <>
//       <label>Restaurant Name : </label>
//       <input
//         type="text"
//         name="restaurantName"
//         placeholder="restaurantName"
//         onChange={(e) => {
//           props.setRestaurantName(e.target.value);
//         }}
//         value={props.restaurantName || ""}
//         required
//       />
//     </>
//   );
// }

// export default UsersignUp;

import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../elem/Wrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __addUsers } from "../../redux/modules/login/loginSlice";

function UsersignUp() {
  //이름 , 비밀번호, 비밀번호 확인, 오너, 식당이름, 닉네임
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const [isRestaurant, setIsRestaurant] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  const [nickName, setNickName] = useState("");

  //오류메시지 상태저장
  const [usernameMessage, setUsernameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  //유효성 검사
  const [isName, setIsName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandle = (e) => {
    e.preventDefault();

    const input = {
      id: username,
      password: password,
      isRestaurant,
      restaurantName,
      nickName,
    };

    dispatch(__addUsers(input));

    setUsername("");
    setPassword("");
    setRestaurantName("");
    setPasswordConfirm("");
    navigate("/");
  };

  // username: 닉네임은 최소 4자 이상, 12자 이하 알파벳 대소문자(a-z, A-Z), 숫자(0-9)로 구성됩니다. ^[a-zA-Z0-9]{4,12}$

  // password: 비밀번호는 최소 8자 이상, 20자 이하 알파벳 대소문자, 숫자(0-9), 특수문자로 구성됩니다. ^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$

  const usernameRegEx = /^[a-zA-Z0-9]{4,12}$/;

  const usernameCheck = (username) => {
    if (username.match(usernameRegEx) === null) {
      setIsName(false);
      setUsernameMessage("아이디 형식을 확인해주세요");
      return;
    } else {
      setIsName(true);
      setUsernameMessage("아이디 형식이 맞아요");
    }
  };

  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/;
  const passwordCheck = (password) => {
    if (password.match(passwordRegEx) === null) {
      setIsPassword(false);
      setPasswordMessage("비밀번호 형식을 확인해주세요");
      return;
    } else {
      setIsPassword(true);
      setPasswordMessage("비밀번호 형식이 맞아요");
    }
  };
  const passwordDoubleCheck = (password, passwordConfirm) => {
    if (password !== passwordConfirm) {
      setIsPasswordConfirm(false);
      setPasswordConfirmMessage("비밀번호가 다릅니다.");
      return;
    } else {
      setIsPasswordConfirm(true);
      setPasswordConfirmMessage("비밀번호가 동일합니다");
    }
  };
  return (
    <Wrapper
      mg="20px auto"
      pd="30px"
      wd="50%"
      hg="80%"
      inline="background: #e1eef6;"
    >
      <h1>SignUp</h1>
      <form onSubmit={(e) => onSubmitHandle(e)}>
        <label>Username : </label>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
            usernameCheck(e.target.value);
          }}
          value={username || ""}
          required
        />
        {username.length > 0 && (
          <span className={`message ${isName ? "success" : "error"}`}>
            {usernameMessage}
          </span>
        )}
        <br />
        <span>
          닉네임은 최소 4자 이상, 12자 이하 알파벳 대소문자, 숫자로 구성됩니다.
        </span>
        <br />
        <label>Nick Name : </label>
        <input
          type="text"
          name="nickName"
          placeholder="nickName"
          onChange={(e) => {
            setNickName(e.target.value);
          }}
          value={nickName || ""}
          required
        />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
            passwordCheck(e.target.value);
          }}
          value={password || ""}
          required
        />
        {password.length > 0 && (
          <span className={`message ${isPassword ? "success" : "error"}`}>
            {passwordMessage}
          </span>
        )}
        <br />
        <span>
          비밀번호는 최소 8자 이상, 20자 이하 알파벳 대소문자, 숫자, 특수문자로
          구성됩니다.
        </span>
        <br />
        <label htmlFor="password">Password Confirm : </label>
        <input
          type="text"
          name="passwordConfirm"
          placeholder="passwordConfirm"
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
            passwordDoubleCheck(password, e.target.value);
          }}
          value={passwordConfirm || ""}
          required
        />
        {passwordConfirm.length > 0 && (
          <span
            className={`message ${isPasswordConfirm ? "success" : "error"}`}
          >
            {passwordConfirmMessage}
          </span>
        )}
        <br />
        <input
          type="checkbox"
          name="isRestaurant"
          defaultChecked={false}
          onChange={(e) => {
            setIsRestaurant(e.target.checked);
          }}
        />
        Owner check
        <p />
        {isRestaurant === true ? (
          <Modal
            restaurantName={restaurantName}
            setRestaurantName={setRestaurantName}
          />
        ) : null}
        <br />
        <button type="submit">Sign up</button>
      </form>
    </Wrapper>
  );
}

function Modal(props) {
  return (
    <>
      <label>Restaurant Name : </label>
      <input
        type="text"
        name="restaurantName"
        placeholder="restaurantName"
        onChange={(e) => {
          props.setRestaurantName(e.target.value);
        }}
        value={props.restaurantName || ""}
        required
      />
    </>
  );
}

export default UsersignUp;
