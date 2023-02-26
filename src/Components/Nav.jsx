import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    
  } from '@chakra-ui/icons';
  
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box padding="0px 13%">
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              <img width="60%" src="data:image/png;base64,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" alt="" />
            </Text>
            <input type="search" placeholder='Search' 
            style={{
              display:"flex",
              justifyContent:"center",
              border:"1px solid grey",
              borderRadius:"4px",
              padding:"0.5% 2%",
              width:"40vw",
              height:"40px",
              alignItems:"center",
              marginTop:"2%",
              marginLeft:"-12%"}} />
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>    
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  <img src={navItem.label} alt="" width={navItem.width} style={{marginTop:navItem.top}}/>                                         
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent     
                  marginTop={"-20px"}           
                  boxShadow={'xl'}                  
                  bg={popoverContentBgColor}
                  p={0.5}
                  width="70px"                  
                  minW="10vw"
                  lineHeight={"20px"}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  
  const NAV_ITEMS = [
    {
      label: 'https://static.thenounproject.com/png/3025366-200.png',
      href:"#",
      width:"40px",
      top:-7,
    },
    {
      label: 'https://cdn-icons-png.flaticon.com/512/456/456283.png',
      width:"30px",
      top:-2,
      children: [
        {
          label: 'Login',
          subLabel: '',
          href: '#',
        },
        {
          label: 'Sign Up',
          subLabel: '',
          href: '#',
          
        },
      ],
    },
    {
      label: 'https://as2.ftcdn.net/v2/jpg/04/41/89/73/1000_F_441897335_o5l9z54efVNgBtGnvjMdUVPK2W94k95M.jpg',
      href: '#',
      width:"30px",
      top:-2,
    },
    {
      label: 'https://t4.ftcdn.net/jpg/02/51/31/67/240_F_251316798_8bZkqJAWw1W1gUDNG1KRQZLWrH4O52U3.jpg',
      href: '#',
      width:"50px",
      top:-10,
    },
  ];