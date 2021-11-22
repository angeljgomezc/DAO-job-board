import React, { useState } from 'react';

//Social Links Components
import AddLinks from '../../components/modals/AddLinks';
import LinksSection from '../../components/create-profile/LinksSection';

//Keywords Components
import KeywordSelect from '../../components/modals/SelectKeywords';
import KeywordsSection from '../../components/forms/KeywordsSection';

import {
  Box,
  ButtonGroup,
  Heading,
  Flex,
  Stack,
  InputGroup,
  Input,
  InputLeftAddon,
  Text,
  Textarea,
  Image,
  Select,
} from '@chakra-ui/react';

import {
  ButtonBlack,
  ButtonGreen,
  ButtonOrange,
} from '../../styles/ui-components/Chakra-Button';

//FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function CreateProfile() {
  const [formData, setFormData] = useState({
    status: '',
    name: '',
    username: '',
    description: '',
    title: '',
    location: '',
    website: '',
    links: '',
    githubusername: '',
  });

  const {
    status,
    name,
    username,
    title,
    location,
    description,
    website,
    githubusername,
  } = formData;

  const [profileLinks, setProfileLinks] = useState({
    linkedin: '',
    twitter: '',
    behance: '',
    dribbble: '',
    producthunt: '',
  });

  const [profileKeywords, setProfileKeywords] = useState();

  //To Open and Close Keywords Modal
  const [changeProfileKeywords, setChangeProfileKeywords] = useState(false);

  const openKeywordModal = () => {
    setChangeProfileKeywords(true);
    console.log(profileKeywords);
  };

  const closeKeywordModal = () => {
    setChangeProfileKeywords(false);
  };

  //Sets profile keywords data
  const keywordsDataHandler = async (selectedKeywords: any) => {
    await setProfileKeywords(selectedKeywords);
    console.log(profileKeywords);
  };

  //To Open and Close Links Modal
  const [changeProfileLinks, setChangeProfileLinks] = useState(false);

  const openLinksModal = () => {
    setChangeProfileLinks(true);
  };

  const closeLinksModal = () => {
    setChangeProfileLinks(false);
  };

  //Sets links data and sends to database
  const linksDataHandler = async (linkData: any) => {
    await setProfileLinks(linkData);
    console.log(profileLinks);
  };

  const onChange = (e: React.FormEvent) =>
    setFormData({
      ...formData,
      [(e.target as any).name]: (e.target as any).value,
    });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      {changeProfileLinks && (
        <AddLinks
          closeLinksModal={closeLinksModal}
          linksDataHandler={linksDataHandler}
          profileLinks={profileLinks}
        />
      )}

      {changeProfileKeywords && (
        <KeywordSelect
          keywordsDataHandler={keywordsDataHandler}
          closeKeywordModal={closeKeywordModal}
          keywordsData={profileKeywords}
        />
      )}

      <Box
        m="auto"
        width={{ '2xl': '70%', md: '90%', sm: '100%' }}
        boxSizing="border-box"
        boxShadow={{ lg: '0px 0px 2px 4px #e2e8f0', sm: 'none' }}
        bg={{ lg: '#ffffff', sm: 'none' }}
        p="2%"
        mt="2.5%"
      >
        <Flex flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}>
          <Stack
            direction="column"
            width="100%"
            m="auto"
            textAlign="center"
            boxSizing="border-box"
            boxShadow="none"
            flex={2}
            spacing={5}
          >
            <Heading size="md">Identity</Heading>

            <Box m="auto">
              <Text size="md">PFP</Text>
              <Image
                w="8rem"
                h="8rem"
                margin="auto"
                borderRadius="180px"
                src="/DevDAO.png"
                alt="developer"
              />
            </Box>

            <Stack direction="column" textAlign="left" spacing={2}>
              <Text>Username</Text>
              <Text fontSize="xs">
                Make it easy for people to know it is you
              </Text>
              <InputGroup position="static">
                <InputLeftAddon>@</InputLeftAddon>
                <Input
                  position="static"
                  bgColor="white"
                  w={{ '2xl': '85%', sm: '85%' }}
                  placeholder="Write your favorite username"
                  name="username"
                  value={username}
                  onChange={(e) => onChange(e)}
                />
              </InputGroup>

              <Text>Professional Title</Text>
              <Text fontSize="xs">What kind of professional are you?</Text>
              <Input
                position="static"
                bgColor="white"
                w="95%"
                placeholder="Write a profile title e.g. (Developer, Designer, Marketer)"
                name="title"
                value={title}
                onChange={(e) => onChange(e)}
              />

              <Text>Profile Keywords</Text>
              <Text fontSize="xs">
                Keywords help categorize your profile in skills and sectors
              </Text>
              <ButtonGroup>
                <ButtonBlack onClick={openKeywordModal}>
                  Choose Keywords
                </ButtonBlack>
              </ButtonGroup>
              <KeywordsSection
                templateColumns="repeat(2, 3fr)"
                keywordsData={profileKeywords}
              />
            </Stack>
          </Stack>

          <Stack direction="column" width="100%" flex={2}>
            <Box p="0px" maxW={{ sm: '100%' }} display="inline-box">
              <Stack spacing={2} mt="2.5%">
                <Heading size="md" textAlign="center">
                  Basic Details
                </Heading>

                <Text>Name</Text>
                <Input
                  position="static"
                  bgColor="white"
                  placeholder="The name that will be displayed on your profile"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                />

                <Text>Description</Text>
                <Textarea
                  position="static"
                  bgColor="white"
                  placeholder="Here goes a brief description of yourself"
                  name="description"
                  value={description}
                  onChange={(e) => onChange(e)}
                />

                <Heading size="md" textAlign="center">
                  Links and Socials
                </Heading>

                <Text size="sm">Website</Text>
                <Input
                  position="static"
                  bgColor="white"
                  placeholder="e.g. developer.com"
                  name="website"
                  value={website}
                  onChange={(e) => onChange(e)}
                />
                <Text size="sm">GitHub</Text>
                <InputGroup position="static">
                  <InputLeftAddon>
                    {' '}
                    <FontAwesomeIcon icon={faGithub} />
                  </InputLeftAddon>
                  <Input
                    position="static"
                    bgColor="white"
                    placeholder="e.g. github.com/github-username"
                    name="githubusername"
                    value={githubusername}
                    onChange={(e) => onChange(e)}
                  />
                </InputGroup>
                <Text size="sm">Social Links</Text>

                <ButtonGroup w="50%">
                  <ButtonBlack onClick={openLinksModal}>Add Links</ButtonBlack>
                </ButtonGroup>

                <LinksSection profileLinks={profileLinks} />
              </Stack>
            </Box>
          </Stack>
        </Flex>

        <ButtonGroup
          display="flex"
          flexDirection="column"
          m="5px"
          mt="2.5%"
          padding="1px"
          w="100%"
        >
          <ButtonGreen onClick={onSubmit}>Save Profile</ButtonGreen>
          <ButtonOrange>Dismiss Changes</ButtonOrange>
        </ButtonGroup>
      </Box>
    </>
  );
}
