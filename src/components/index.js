import * as Layouts from './Layout'
import * as Navigation from './Navigation'
import * as Forms from './Forms'
import * as Typography from './Typography'
import * as Overlay from './Overlay'
import * as DataDisplay from './DataDisplay'
import * as Transitions from './Transitions'
import * as Feedback from './Feedback'
import * as Media from './Media'
import * as SEO from './SEO'
import * as Recipe from './Recipe'
import * as Templates from './Templates'
import * as Validation from './Validation'
import * as MenuCategory from './Menu'
const { Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } =
  MenuCategory
const { Dashboard, LandingPage } = Templates
const {
  RenderRawHtml,
  PersonItem,
  FileItem,
  Rotate,
  FilterByStatusMenu,
  SortingMenu,
  PlaceButton,
  OrganizationUnitButton,
  BindButton,
  UnbindButton,
  UsersButton,
  GroupButton,
  PermissionsButton,
  AcceptButton,
  CreateButton,
  DeleteButton,
  DetailsButton,
  JudgmentButton,
  DotsButton,
  RefuseButton,
  UpdateButton,
  Calendar,
  FiltersForm,
  MeFormsBuilder,
  MeFormsQuestionViewer,
  MeFormsAnswersViewer,
  MenuItemGroups,
  MenuItemUsers,
  MenuItemPermissions,
  MenuItemCustomFields,
  MenuItemDelete,
  MenuItemDetails,
  MenuItemPublish,
  MenuItemUnpublish,
  MenuItemUpdate,
  MenuItemFile,
  Navbar,
  PersonSearch,
  Sidebar,
  InfoModal,
  BasicTextEditor,
  FullPageTextEditor
} = Recipe
const {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Result,
  EmptyData,
  Loader,
  Spinner,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Progress,
  CircularProgress,
  CircularProgressLabel
} = Feedback
const { Head } = SEO
const {
  IsAuthenticated,
  HiddenPermission,
  RedirectPermission,
  UserHasAtLeastOnePermission,
  HasUser
} = Validation
const { Avatar, AvatarGroup, Icon, Image, Lottie } = Media
const { ScaleFade } = Transitions
const {
  Link,
  LinkBox,
  LinkOverlay,
  NextLink,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Pagination,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} = Navigation
const { Box, Stack, Divider, Center, Flex, SimpleGrid, Grid, GridItem } =
  Layouts
const {
  PaginationDescription,
  Descriptions,
  Heading,
  Span,
  Text,
  DescriptionItem,
  DescriptionVertical
} = Typography
const {
  Card,
  Paper,
  ScrollView,
  Table,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tfoot,
  Tbody,
  Thead,
  List,
  ListIcon,
  ListItem,
  Badge,
  Dot,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel
} = DataDisplay
const {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverCloseButton,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Tooltip
} = Overlay
const {
  UploadSingleImage,
  Search,
  Button,
  ButtonGroup,
  FileManager,
  Dropzone,
  SingleFileItem,
  IconButton,
  Checkbox,
  CheckboxGroup,
  FormItem,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  MaskInput,
  PasswordInput,
  Radio,
  RadioGroup,
  Select,
  NativeSelect,
  Switch,
  Textarea,
  InputTag
} = Forms

export {
  // MenuCategory
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  SortingMenu,
  FilterByStatusMenu,
  // Templates
  Dashboard,
  LandingPage,
  // Recipe
  RenderRawHtml,
  Rotate,
  PersonItem,
  FileItem,
  Calendar,
  FiltersForm,
  MeFormsBuilder,
  MeFormsQuestionViewer,
  MeFormsAnswersViewer,
  PlaceButton,
  OrganizationUnitButton,
  BindButton,
  UnbindButton,
  UsersButton,
  GroupButton,
  PermissionsButton,
  AcceptButton,
  CreateButton,
  DeleteButton,
  DetailsButton,
  JudgmentButton,
  DotsButton,
  RefuseButton,
  UpdateButton,
  MenuItemGroups,
  MenuItemUsers,
  MenuItemPermissions,
  MenuItemCustomFields,
  MenuItemDelete,
  MenuItemDetails,
  MenuItemPublish,
  MenuItemUnpublish,
  MenuItemUpdate,
  MenuItemFile,
  Navbar,
  PersonSearch,
  Sidebar,
  InfoModal,
  BasicTextEditor,
  FullPageTextEditor,
  // Feedback
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Result,
  EmptyData,
  Loader,
  Spinner,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Progress,
  CircularProgress,
  CircularProgressLabel,
  // Media
  Avatar,
  AvatarGroup,
  Icon,
  Image,
  Lottie,
  // Validation
  IsAuthenticated,
  HiddenPermission,
  RedirectPermission,
  UserHasAtLeastOnePermission,
  HasUser,
  // DataDisplay
  Card,
  Paper,
  ScrollView,
  Table,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tfoot,
  Tbody,
  Thead,
  List,
  ListIcon,
  ListItem,
  Badge,
  Dot,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  // Navigation

  Link,
  LinkBox,
  LinkOverlay,
  NextLink,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Pagination,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  // Forms
  Search,
  Button,
  ButtonGroup,
  FileManager,
  SingleFileItem,
  UploadSingleImage,
  Dropzone,
  IconButton,
  Checkbox,
  CheckboxGroup,
  FormItem,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  MaskInput,
  PasswordInput,
  Radio,
  RadioGroup,
  Select,
  NativeSelect,
  Switch,
  Textarea,
  InputTag,
  // Layout
  Box,
  Stack,
  Divider,
  Center,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  // Typography
  PaginationDescription,
  Descriptions,
  Heading,
  Span,
  Text,
  DescriptionItem,
  DescriptionVertical,
  // Overlay
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverCloseButton,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
  // Transitions
  ScaleFade,
  // SEO
  Head
}