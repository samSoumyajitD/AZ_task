import React, { useState } from 'react';
import './CourseContent.css';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const CourseSection = ({ part, title, duration, difficulty, videos, articles, quizzes, codingExercises, resources }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const [checkedItems, setCheckedItems] = useState({
        videos: Array(videos.length).fill(false),
        articles: Array(articles.length).fill(false),
        quizzes: Array(quizzes.length).fill(false),
        codingExercises: Array(codingExercises.length).fill(false),
        resources: Array(resources.length).fill(false),
    });

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const handleCheckboxChange = (category, index) => {
        setCheckedItems((prevState) => ({
            ...prevState,
            [category]: prevState[category].map((item, idx) =>
                idx === index ? !item : item
            ),
        }));
    };

    const calculateProgress = () => {
        const allItems = Object.values(checkedItems).flat();
        const completedItems = allItems.filter((item) => item).length;
        return (completedItems / allItems.length) * 100;
    };

    return (
        <div className="course-content">
            <div className="course-content-head">
                <div className="course-content-subhead">
                    <div className="course-content-subhead-left">
                        <div className="course-part">{part}</div>
                        <div className="course-title">{title}</div>
                    </div>
                    <div className="course-content-subhead-right">
                        <div className="content-attribute"><AccessTimeOutlinedIcon /> {duration}</div>
                        <div className="content-attribute"><SignalCellularAltOutlinedIcon /> {difficulty}</div>
                        <div className="content-attribute"><FolderCopyOutlinedIcon /> {videos.length + articles.length + quizzes.length + codingExercises.length + resources.length}</div>
                        <div onClick={toggleExpand} className="expand-toggle">
                            {isExpanded ? (
                                <ExpandLessOutlinedIcon style={{ fontSize: '24px' }} />
                            ) : (
                                <ExpandMoreOutlinedIcon style={{ fontSize: '24px' }} />
                            )}
                        </div>
                    </div>
                </div>

                <div className="progress-container">
                    <div className="course-progress-bar">
                        <div
                            className="course-progress-fill"
                            style={{ width: `${calculateProgress()}%` }}
                        ></div>
                    </div>
                    <div className="progress-percentage">{Math.round(calculateProgress())}% Completed</div>
                </div>
            </div>

            {isExpanded && (
                <div className="expandable-content">
                    <ul className="checkbox-list">
                        {videos.map((video, index) => (
                            <li key={`video-${index}`} className="item-text">


<div className='row1'>
<div className='row12'>
                              <input
    type="checkbox"
    style={{ transform: 'scale(1.5)', width: '14px', height: '14px', marginLeft: '14px' }} 
    checked={checkedItems.videos[index]}
    onChange={() => handleCheckboxChange('videos', index)}
/>

                                <PlayCircleOutlineOutlinedIcon style={{ marginRight: '8px' }} />
                                <div>{video}</div></div>
                                <div className='row13'><AccessTimeOutlinedIcon/> 10:00</div>
                                </div>
                            </li>
                        ))}
                        {articles.map((article, index) => (
                            <li key={`article-${index}`} className="item-text">
                              <div className='row1'>
                                <div className='row12'><input
                                    type="checkbox"
                                    style={{ transform: 'scale(1.5)', width: '14px', height: '14px', marginLeft: '14px' }}
                                    checked={checkedItems.articles[index]}
                                    onChange={() => handleCheckboxChange('articles', index)}
                                />
                                <FolderCopyOutlinedIcon style={{ marginRight: '8px' }} />
                                <div>{article}</div></div>
                                <div className='row13'><AccessTimeOutlinedIcon/> 10:00</div>
                              </div>
                                
                            </li>
                        ))}
                        {quizzes.map((quiz, index) => (
                            <li key={`quiz-${index}`} className="item-text">
                              <div className='row1'>
                              <div className='row12'>
                                <input
                                    type="checkbox"
                                    style={{ transform: 'scale(1.5)', width: '14px', height: '14px',marginLeft: '14px'}}
                                    checked={checkedItems.quizzes[index]}
                                    onChange={() => handleCheckboxChange('quizzes', index)}
                                />
                                <HelpOutlineOutlinedIcon style={{ marginRight: '8px' }} />
                                <div>{quiz}</div></div>
                                <div className='row13'><AccessTimeOutlinedIcon/> 10:00</div>
                                </div>
                            </li>
                        ))}
                        {codingExercises.map((exercise, index) => (
                            <li key={`coding-${index}`} className="item-text">
<div className='row1'>
<div className='row12'>
                                <input
                                    type="checkbox"
                                    style={{ transform: 'scale(1.5)', width: '14px', height: '14px',marginLeft: '14px' }}
                                    checked={checkedItems.codingExercises[index]}
                                    onChange={() => handleCheckboxChange('codingExercises', index)}
                                />
                                <PlayCircleOutlineOutlinedIcon style={{ marginRight: '8px' }} />
                                <div>{exercise}</div></div>
                                <div className='row13'><AccessTimeOutlinedIcon/> 10:00</div>
                                </div>
                            </li>
                        ))}
                        {resources.map((resource, index) => (
                            <li key={`resource-${index}`} className="item-text">
                              <div className='row1'>
                              <div className='row12'>
                                <input
                                    type="checkbox"
                                    style={{ transform: 'scale(1.5)', width: '14px', height: '14px',marginLeft: '14px' }}
                                    checked={checkedItems.resources[index]}
                                    onChange={() => handleCheckboxChange('resources', index)}
                                />
                                <FolderCopyOutlinedIcon style={{ marginRight: '8px' }} />
                                <div>{resource}</div>    </div>
                                <div className='row13'><AccessTimeOutlinedIcon/> 10:00</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CourseSection;
