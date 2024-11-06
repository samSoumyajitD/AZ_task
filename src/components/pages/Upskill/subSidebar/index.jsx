import React, { useState, useRef } from 'react';
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
    const sidebarRef = useRef(null);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);

        if (!isSidebarOpen) {
            // Scroll to the top when expanding the sidebar
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleChapterSelect = (chapter) => {
        setSelectedChapter(chapter);
        if (isMobile) setIsSidebarOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 2 }}>
            {/* Toggle Button for Mobile View with Fixed Position */}
            {isMobile && (
                <IconButton
                    onClick={handleToggleSidebar}
                    sx={{
                        position: 'fixed',
                        top: 210,
                        right: 10,
                        zIndex: 100,
                        backgroundColor: 'white',
                        color: '#608AD2',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        borderRadius: '50%',
                        padding: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            backgroundColor: '#f0f4ff',
                            boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.15)',
                        },
                    }}
                >
                    {isSidebarOpen ? (
                        <CloseOutlinedIcon sx={{ fontSize: 32 }} />
                    ) : (
                        <ExpandCircleDownOutlinedIcon sx={{ fontSize: 32 }} />
                    )}
                </IconButton>
            )}

            {/* Display Selected Chapter Info in Mobile View */}
            {isMobile && selectedChapter && !isSidebarOpen && (
                <Box sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: '#EFF5FF', borderRadius: 2 }}>
                    <Typography variant="body1" fontWeight={600}>
                        {selectedChapter.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                        <AccessTimeOutlinedIcon fontSize="small" sx={{ color: '#608AD2', marginRight: 0.5 }} />
                        <Typography variant="body2">{selectedChapter.time}</Typography>
                    </Box>
                </Box>
            )}

            {/* Sidebar with Chapter List */}
            {(isSidebarOpen || !isMobile) && (
                <Box
                    ref={sidebarRef}
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
                                onClick={() => handleChapterSelect(chapter)}
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

            {/* Main Content Area for Selected Chapter */}
            <Box sx={{ flex: 1, padding: 2 }}>
              
            {selectedChapter?.id === 1 && (
    <div>
        <div className='CourseContent'>
            <CourseContent
                part="Part 1"
                title="Fundamentals of Web Dev"
                duration="01:45:00"
                difficulty="Easy"
                videos={["Video 1", "Video 2"]}
                articles={["Article 1", "Article 2"]}
                quizzes={["Quiz 1"]}
                codingExercises={["Coding Exercise 1"]}
                resources={["Combined Resource 1"]}
            />
        </div>
        <div className='CourseContent'>
            <CourseContent
                part="Part 2"
                title="Introduction to CSS"
                duration="02:00:00"
                difficulty="Medium"
                videos={["Video 1", "Video 2", "Video 3"]}
                articles={["Article 1", "Article 2"]}
                quizzes={["Quiz 1"]}
                codingExercises={["Coding Exercise 1"]}
                resources={["Combined Resource 1"]}
            />
        </div>
        <div className='CourseContent'>
            <CourseContent
                part="Part 3"
                title="JavaScript for Beginners"
                duration="02:15:00"
                difficulty="Medium"
                videos={["Video 1", "Video 2"]}
                articles={["Article 1", "Article 2"]}
                quizzes={["Quiz 1", "Quiz 2"]}
                codingExercises={["Coding Exercise 1", "Coding Exercise 2"]}
                resources={["Combined Resource 1", "Combined Resource 2"]}
            />
        </div>
        <div className='CourseContent'>
            <CourseContent
                part="Part 4"
                title="Responsive Web Design"
                duration="02:30:00"
                difficulty="Hard"
                videos={["Video 1", "Video 2"]}
                articles={["Article 1", "Article 2"]}
                quizzes={["Quiz 1"]}
                codingExercises={["Coding Exercise 1"]}
                resources={["Combined Resource 1"]}
            />
        </div>
    </div>
)}{selectedChapter?.id === 2 && (
    <div>
        <div className='CourseContent'>
            <CourseContent
                part="Part 1"
                title="HTML5 Basics"
                duration="01:30:00"
                difficulty="Easy"
                videos={["Video 1", "Video 2"]}
                articles={["Article 1", "Article 2"]}
                quizzes={["Quiz 1"]}
                codingExercises={["Coding Exercise 1"]}
                resources={["Combined Resource 1"]}
            />
        </div>
        <div className='CourseContent'>
            <CourseContent
                part="Part 2"
                title="Advanced CSS Techniques"
                duration="02:00:00"
                difficulty="Medium"
                videos={["Video 1", "Video 2"]}
                articles={["Article 1", "Article 2"]}
                quizzes={["Quiz 1", "Quiz 2"]}
                codingExercises={["Coding Exercise 1"]}
                resources={["Combined Resource 1"]}
            />
        </div>
        <div className='CourseContent'>
            <CourseContent
                part="Part 3"
                title="JavaScript DOM Manipulation"
                duration="02:00:00"
                difficulty="Medium"
                videos={["Video 1", "Video 2", "Video 3"]}
                articles={["Article 1", "Article 2"]}
                quizzes={["Quiz 1"]}
                codingExercises={["Coding Exercise 1"]}
                resources={["Combined Resource 1"]}
            />
        </div>
    </div>
)}{selectedChapter?.id === 3 && (
    <div>
        <div className='CourseContent'>
            <CourseContent
                part="Part 1"
                title="CSS Flexbox Layout"
                duration="01:30:00"
                difficulty="Easy"
                videos={["Video 1", "Video 2"]}
                articles={["Article 1", "Article 2"]}
                quizzes={["Quiz 1"]}
                codingExercises={["Coding Exercise 1"]}
                resources={["Combined Resource 1"]}
            />
        </div>
        <div className='CourseContent'>
            <CourseContent
                part="Part 2"
                title="CSS Grid Layout"
                duration="02:00:00"
                difficulty="Medium"
                videos={["Video 1", "Video 2"]}
                articles={["Article 1", "Article 2"]}
                quizzes={["Quiz 1"]}
                codingExercises={["Coding Exercise 1", "Coding Exercise 2"]}
                resources={["Combined Resource 1", "Combined Resource 2"]}
            />
        </div>
    </div>
)}{selectedChapter?.id === 4 && (
    <div>
        <div className='CourseContent'>
            <CourseContent
                part="Part 1"
                title="Advanced JavaScript Functions"
                duration="02:10:00"
                difficulty="Medium"
                videos={["Video 1", "Video 2"]}
                articles={["Article 1", "Article 2"]}
                quizzes={["Quiz 1", "Quiz 2"]}
                codingExercises={["Coding Exercise 1"]}
                resources={["Combined Resource 1"]}
            />
        </div>
    </div>
)}{selectedChapter?.id === 5 && (
    <div>
        <div className='CourseContent'>
            <CourseContent
                part="Part 1"
                title="Introduction to React.js"
                duration="02:30:00"
                difficulty="Hard"
                videos={["Video 1", "Video 2"]}
                articles={["Article 1", "Article 2"]}
                quizzes={["Quiz 1", "Quiz 2"]}
                codingExercises={["Coding Exercise 1", "Coding Exercise 2"]}
                resources={["Combined Resource 1"]}
            />
        </div>
    </div>
)}
            </Box>
        </Box>
    );
};

export default Sidebarsub;
