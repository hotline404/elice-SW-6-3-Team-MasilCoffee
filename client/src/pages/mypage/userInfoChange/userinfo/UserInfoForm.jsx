import React from 'react'
import { InputBox } from '../../style/ConfirmPassword.style'
import Input from '../../../../components/ui/Input/Input'
import { InputBoxColumn } from '../../style/UserInfoChange.style'

function UserInfoForm({InputInfo, emailRef, email}) {
  return (
    <div>
      <InputBox>
              <Input
                ref={emailRef}
                input={{
                  name: "이메일",
                  type: "email",
                  id: "change_email",
                  value: `${email}`,
                }}
              />
            </InputBox>
            <InputBoxColumn>
            {InputInfo.map(info => {
              return (
                <Input 
                  ref={info.ref}
                  input={{
                    name: info.name,
                    type: info.type,
                    id: info.id,
                    placeholder: info.placeholder,
                  }}
                />
              )
            })}
            </InputBoxColumn>
    </div>
  )
}

export default UserInfoForm
