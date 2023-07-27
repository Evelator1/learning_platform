import PostsFeedTab from './components/dashboard/tabs/userfeed/PostsFeedTab';
import LearningCardsTab from './components/dashboard/tabs/LearningCardsTab';
import InterviewQuestionsTab from './components/dashboard/tabs/InterviewQuestionsTab';
import JobSearchTab from './components/dashboard/tabs/JobSearch/JobSearchTab';
import ShareReviewsTab from './components/dashboard/tabs/review/ShareReviewsTab';
import ChatTab from './components/dashboard/tabs/ChatTab';
import NextStepsTab from './components/dashboard/tabs/NextStepsTab';
import Favourite from './components/dashboard/tabs/Favourite';

// Replace react-icons with Google Material Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

export const userMenuOptions = [
  { id: 0, name: "Your Feed", linkTo: "feed", iconOutlined: HomeOutlinedIcon, display: PostsFeedTab },
  { id: 1, name: "Learning Cards", linkTo: "learning-cards", iconOutlined: DashboardOutlinedIcon , display: LearningCardsTab },
  { id: 2, name: "Interview Questions", linkTo: "interview-questions", iconOutlined: QuestionAnswerOutlinedIcon , display: InterviewQuestionsTab },
  { id: 3, name: "Job Search", linkTo: "job-search", iconOutlined: WorkOutlineOutlinedIcon , display: JobSearchTab },
  { id: 4, name: "Your Experience", linkTo: "reviews", iconOutlined: ShareOutlinedIcon , display: ShareReviewsTab },
  { id: 5, name: "Connect", linkTo: "connect", iconOutlined: ChatOutlinedIcon , display: ChatTab },
  { id: 6, name: "Next Steps", linkTo: "next-steps", iconOutlined: HikingOutlinedIcon , display: NextStepsTab },
  { id: 7, name: "Your Favourites", linkTo: "favourites", iconOutlined: BookmarkBorderOutlinedIcon , display: Favourite },
];
