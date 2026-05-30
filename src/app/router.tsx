import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import AiCodingPage from '../pages/AiCodingPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import QuestionDetailPage from '../pages/QuestionDetailPage'
import QuestionsPage from '../pages/QuestionsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'questions',
        element: <QuestionsPage />,
      },
      {
        path: 'questions/:id',
        element: <QuestionDetailPage />,
      },
      {
        path: 'ai-coding',
        element: <AiCodingPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
