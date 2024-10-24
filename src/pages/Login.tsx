import { FormEvent, useState } from 'react';
import { useAuth } from '../hooks/useAuth.tsx';
import styled from 'styled-components';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would usually send a request to your backend to authenticate the user
    // For the sake of this example, we're using a mock authentication
    if (username === 'user' && password === 'password' && auth?.login) {
      // Replace with actual authentication logic
      await auth?.login({ username });
    } else {
      alert('Invalid username or password');
    }
  };
  return (
    <LoginWrapper>
      <FieldsWrapper>
        <Form onSubmit={handleLogin}>
          <FieldWrapper>
            <Label htmlFor="username">Username: (mock: user)</Label>
            <Input
              id="username"
              autoComplete="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="password">Password: (mock: password)</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FieldWrapper>
          <Button type="submit">Login</Button>
        </Form>
      </FieldsWrapper>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  place-items: center center;
  flex: 1;
`;

const FieldsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  place-items: center center;
`;

const Form = styled.form`
  border: 1px solid #d1d1d1;
  border-radius: 8px;
  padding: 48px;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 12px;
`;

const Input = styled.input`
  background: none;
  padding: 4px;
  border: 2px solid black;
  border-radius: 4px;
  width: calc(100% - 2 * 4px);
  box-shadow: none;
  color: black;
`;

const Button = styled.button`
  background: none;
  border: 1px solid black;
  color: black;
  width: 100%;
  margin-top: 8px;
`;
