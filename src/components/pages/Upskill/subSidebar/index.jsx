import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Box, IconButton } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useMediaQuery } from '@mui/material';
import CourseContent from '../CourseContent';
import './index.css';

const chapters = [
    { id: 1, name: 'Chapter 1', time: '05:00:00' },
    { id: 2, name: 'Chapter 2', time: '02:00:00' },
    { id: 3, name: 'Chapter 3', time: '06:00:00' },
    { id: 4, name: 'Chapter 4', time: '05:00:00' },
    { id: 5, name: 'Chapter 5', time: '03:00:00' },
];

const Sidebarsub = () => {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)'); 

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 2 }}>
            {/*--------- Toggle Buttons for Mobile View */}
            {isMobile && (
                <IconButton onClick={handleToggleSidebar} sx={{ alignSelf: 'flex-end' }}>
                    {isSidebarOpen ? (
                        <CloseOutlinedIcon sx={{ fontSize: 40 }} />
                    ) : (
                        <ExpandCircleDownOutlinedIcon sx={{ fontSize: 40 }} />
                    )}
                </IconButton>
            )}

           
            {(isSidebarOpen || !isMobile) && (
                <Box
                    sx={{
                        width: isMobile ? '100%' : 250,
                        padding: 2,
                        display: isMobile && !isSidebarOpen ? 'none' : 'block',
                    }}
                >
                    <List>
                        {chapters.map((chapter) => (
                            <ListItem
                                key={chapter.id}
                                button
                                onClick={() => {
                                    setSelectedChapter(chapter);
                                    if (isMobile) setIsSidebarOpen(false);
                                }}
                                sx={{
                                    backgroundColor: selectedChapter?.id === chapter.id ? '#EFF5FF' : 'transparent',
                                    borderRadius: 2,
                                    marginBottom: 1,
                                }}
                            >
                                <ListItemText
                                    primary={
                                        <Typography
                                            variant="body1"
                                            fontWeight={selectedChapter?.id === chapter.id ? 600 : 400}
                                        >
                                            {chapter.name}
                                        </Typography>
                                    }
                                />
                                {selectedChapter?.id === chapter.id && chapter.time && (
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 'unset',
                                            color: '#608AD2',
                                            marginLeft: 'auto',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <AccessTimeOutlinedIcon fontSize="small" />
                                        <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
                                            {chapter.time}
                                        </Typography>
                                    </ListItemIcon>
                                )}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )}

            {/*---------- Main Content Area for Selected Chapter */}
            <Box sx={{ flex: 1, padding: 2 }}>
                {selectedChapter?.id === 1 && <div >
                    <div className='CourseContent'>
                    <CourseContent
  part="Part 1"
  title="Introduction to Programming"
  duration="02:00:00"
  difficulty="Medium"
  videos={["Video 1", "Video 2"]}
  articles={["Article 1", "Article 2"]}
  quizzes={["Quiz 1"]}
  codingExercises={["Exercise 1"]}
  resources={["Resource 1"]}
/>
                    </div>
               
                    <div className='CourseContent'>
                    <CourseContent
  part="Part 2"
  title="Introduction to Programming II"
  duration="02:00:00"
  difficulty="Medium"
  videos={[]}
  articles={["Article 1", "Article 2"]}
  quizzes={["Quiz 1"]}
  codingExercises={["Exercise 1"]}
  resources={["Resource 1"]}
/>
                    </div>
                    <div className='CourseContent'>
                    <CourseContent
  part="Part 3"
  title="Introduction to Programming III"
  duration="02:00:00"
  difficulty="Medium"
  videos={["Video 1", "Video 2"]}
  articles={["Article 1"]}
  quizzes={[]}
  codingExercises={["Exercise 1"]}
  resources={[]}
/>
                    </div>
               
                    </div>}
                {selectedChapter?.id === 2 && <div>
                    
                    <div className='CourseContent'><CourseContent
  part="Part 1"
  title="Programming One o One"
  duration="02:00:00"
  difficulty="Medium"
  videos={[]}
  articles={["Article 1"]}
  quizzes={["Quiz 1"]}
  codingExercises={["Exercise 1"]}
  resources={["Resource 1"]}
/></div></div>}
                {selectedChapter?.id === 3 && <div><div className='CourseContent'><CourseContent
  part="Part 1"
  title="Programming One o One"
  duration="02:00:00"
  difficulty="Medium"
  videos={[]}
  articles={["Article 1"]}
  quizzes={["Quiz 1"]}
  codingExercises={["Exercise 1"]}
  resources={["Resource 1"]}
/></div></div>}
                {selectedChapter?.id === 4 && <div><div className='CourseContent'><CourseContent
  part="Part 1"
  title="Programming One o One"
  duration="02:00:00"
  difficulty="Medium"
  videos={[]}
  articles={["Article 1"]}
  quizzes={["Quiz 1"]}
  codingExercises={["Exercise 1"]}
  resources={["Resource 1"]}
/></div></div>}
                {selectedChapter?.id === 5 && <div><div className='CourseContent'><CourseContent
  part="Part 1"
  title="Programming One o One"
  duration="02:00:00"
  difficulty="Medium"
  videos={[]}
  articles={["Article 1"]}
  quizzes={["Quiz 1"]}
  codingExercises={["Exercise 1"]}
  resources={["Resource 1"]}
/></div></div>}
            </Box>
        </Box>
    );
};

export default Sidebarsub;
