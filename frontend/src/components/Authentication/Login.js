import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";

const Login = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [pic, setPic] = useState();
  const [show, setShow] = useState();
  //function to show and hide password
  const handleClick = () => {
    setShow(!show);
  };
  //Image postin logic
  const postDetails = (pics) => {};
  //
  const submitHandler = () => {};

  return (
    <VStack spacing="5px" color="black">
      <FormControl id="first-name" isRequired>
        {/* //User Name */}
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name "
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></Input>
      </FormControl>
      {/* //User Email */}
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email "
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></Input>
      </FormControl>
      {/* //User Password */}
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Your Password "
            onChange={(e) => {
              setConfirmpassword(e.target.value);
            }}
          ></Input>
          {/* //Button to show and hide the password */}
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Log In
      </Button>
      <Button variant="solid" colorScheme="red" width="100%">
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};
export default Login;
