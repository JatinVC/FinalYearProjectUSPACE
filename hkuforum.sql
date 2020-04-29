-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 29, 2020 at 04:01 PM
-- Server version: 5.7.24
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hkuforum`
--

-- --------------------------------------------------------

--
-- Table structure for table `announcements`
--

CREATE TABLE `announcements` (
  `a_id` int(8) NOT NULL,
  `a_title` text NOT NULL,
  `a_content` text NOT NULL,
  `a_user` int(8) NOT NULL,
  `a_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `announcements`
--

INSERT INTO `announcements` (`a_id`, `a_title`, `a_content`, `a_user`, `a_date`) VALUES
(1, 'testing from postman', 'testing from postman', 16, '2020-04-29 23:22:49'),
(2, 'Testing from page', 'Testing from page', 16, '2020-04-29 23:34:06');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cat_id` int(8) NOT NULL,
  `cat_name` varchar(255) DEFAULT NULL,
  `cat_desc` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cat_id`, `cat_name`, `cat_desc`) VALUES
(1, 'Mathematics for Computing', 'CCIT-SomeNumbersHere'),
(2, 'Introduction to Computer Organization', 'CCIT-SomeNumbersHere'),
(3, 'Introduction to Data Structures and Algorithms', 'Introduction to Data Structures and Algorithms'),
(4, 'Object Oriented Programming', 'Object Oriented Programming'),
(5, 'Introduction to Computer Programming', 'Introduction to Computer Programming'),
(6, 'Mobile Application Development', 'CCIT-somenumbershere');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(8) NOT NULL,
  `comment_user` int(8) NOT NULL,
  `comment_date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `comment_content` longtext NOT NULL,
  `comment_post` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `comment_user`, `comment_date`, `comment_content`, `comment_post`) VALUES
(1, 16, '2020-04-14 14:29:04.796684', 'Testing for comment system', 24),
(2, 16, '2020-04-14 14:34:15.892361', 'Testing again', 24),
(3, 16, '2020-04-14 18:04:13.112687', 'HAHAHAHAHHAA', 25),
(4, 16, '2020-04-18 16:45:44.751820', 'Testing comment creation for deployment', 29),
(5, 17, '2020-04-18 16:58:53.636305', 'Testing agian', 29),
(6, 16, '2020-04-18 18:57:58.277845', ';lkasdjf;lkdsajf;lkadsj', 30),
(7, 16, '2020-04-18 19:00:52.784521', 'lkashddlkjajslkdjads', 30);

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `post_id` int(8) NOT NULL,
  `post_title` varchar(255) DEFAULT NULL,
  `post_content` text,
  `post_date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `post_cat` int(8) NOT NULL,
  `post_topic` int(8) NOT NULL,
  `post_user` int(8) NOT NULL,
  `post_likes` int(8) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`post_id`, `post_title`, `post_content`, `post_date`, `post_cat`, `post_topic`, `post_user`, `post_likes`) VALUES
(24, 'Testing', 'Testing', '2020-04-10 19:23:22.000000', 1, 1, 16, 0),
(25, 'another test', 'omg this is a test', '2020-04-10 19:23:59.000000', 2, 1, 16, 0),
(26, 'Testing with laragon', 'Testing with laragon', '2020-04-14 14:29:21.816332', 1, 1, 16, 0),
(27, 'Testing the teacher review', 'wooowowwww soo oguuuuuuuuuudddd', '2020-04-14 23:18:59.265166', 1, 5, 16, 0),
(28, 'Testing for a different subject', 'MAD IS MAD OMG ', '2020-04-14 23:46:21.848967', 6, 5, 16, 0),
(29, 'Testing avatar creation', 'Avatar Creation', '2020-04-17 22:36:12.482904', 1, 1, 17, 0),
(30, 'alksjdlkasjdlkasjlkads', 'laksjdlkasjdlkasjdlkasjlkdasdas', '2020-04-18 16:59:12.236772', 1, 5, 17, 0);

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `project_id` int(8) NOT NULL,
  `project_title` varchar(255) DEFAULT NULL,
  `project_user` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`project_id`, `project_title`, `project_user`) VALUES
(1, 'Testing group project', 16),
(2, 'Testing Creation', 16),
(3, 'SHowing', 17),
(4, 'as;lkdjdj;ladsk;lads', 16);

-- --------------------------------------------------------

--
-- Table structure for table `projectusers`
--

CREATE TABLE `projectusers` (
  `prou_id` int(8) NOT NULL,
  `prou_project` int(8) NOT NULL,
  `prou_usera` int(8) NOT NULL,
  `prou_userb` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projectusers`
--

INSERT INTO `projectusers` (`prou_id`, `prou_project`, `prou_usera`, `prou_userb`) VALUES
(1, 1, 16, 17),
(3, 2, 16, 17);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `Role_ID` int(8) NOT NULL,
  `Role` varchar(20) NOT NULL,
  `Role_Desc` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`Role_ID`, `Role`, `Role_Desc`) VALUES
(1, 'Admin', 'does stuff better th'),
(2, 'Moderator', 'Better than normal u'),
(3, 'NormalUser', 'Default for all ');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `task_id` int(8) NOT NULL,
  `task_project` int(8) NOT NULL,
  `task_content` text NOT NULL,
  `task_user` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`task_id`, `task_project`, `task_content`, `task_user`) VALUES
(1, 1, 'Task', 16);

-- --------------------------------------------------------

--
-- Table structure for table `topic`
--

CREATE TABLE `topic` (
  `topic_id` int(8) NOT NULL,
  `topic_sub` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `topic`
--

INSERT INTO `topic` (`topic_id`, `topic_sub`) VALUES
(1, 'General Discussion'),
(2, 'Assignment Talk'),
(3, 'Exam Talk'),
(4, 'Projects'),
(5, 'Teacher Review'),
(6, 'Announcement');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(8) NOT NULL,
  `realname` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `approved_by_mod` tinyint(1) NOT NULL DEFAULT '0',
  `user_role` int(8) NOT NULL,
  `user_stid` varchar(10) NOT NULL,
  `user_email` varchar(120) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `realname`, `username`, `password`, `created_at`, `approved_by_mod`, `user_role`, `user_stid`, `user_email`) VALUES
(16, 'Jatin Chandwaney', 'JC', '$2b$10$w0/X5OhRasobpRKA3HUdVeMq70gOCCtKxdEwulj9tjd4orky3G52e', '2020-04-10 14:29:45', 0, 1, '123', 'test@test.com'),
(17, 'J A', 'JA', '$2b$10$O9atdhssiUaS9yEn2HmG5uzbMyqcGIZm/XfNaHassnpPdWc8On8si', '2020-04-15 22:03:08', 0, 2, '123', 'test@test.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`a_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `user` (`comment_user`),
  ADD KEY `post` (`comment_post`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `topic connection` (`post_topic`),
  ADD KEY `user connection` (`post_user`),
  ADD KEY `category connection` (`post_cat`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`project_id`),
  ADD KEY `projectUser` (`project_user`);

--
-- Indexes for table `projectusers`
--
ALTER TABLE `projectusers`
  ADD PRIMARY KEY (`prou_id`),
  ADD KEY `creatorUser` (`prou_usera`),
  ADD KEY `newUser` (`prou_userb`),
  ADD KEY `masterProject` (`prou_project`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`Role_ID`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`task_id`),
  ADD KEY `taskProject` (`task_project`),
  ADD KEY `taskUser` (`task_user`);

--
-- Indexes for table `topic`
--
ALTER TABLE `topic`
  ADD PRIMARY KEY (`topic_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `role` (`user_role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcements`
--
ALTER TABLE `announcements`
  MODIFY `a_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `cat_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `post_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `project_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `projectusers`
--
ALTER TABLE `projectusers`
  MODIFY `prou_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `Role_ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `task_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `topic`
--
ALTER TABLE `topic`
  MODIFY `topic_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `post` FOREIGN KEY (`comment_post`) REFERENCES `post` (`post_id`),
  ADD CONSTRAINT `user` FOREIGN KEY (`comment_user`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `category connection` FOREIGN KEY (`post_cat`) REFERENCES `category` (`cat_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `topic connection` FOREIGN KEY (`post_topic`) REFERENCES `topic` (`topic_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user connection` FOREIGN KEY (`post_user`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `projectUser` FOREIGN KEY (`project_user`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `projectusers`
--
ALTER TABLE `projectusers`
  ADD CONSTRAINT `creatorUser` FOREIGN KEY (`prou_usera`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `masterProject` FOREIGN KEY (`prou_project`) REFERENCES `project` (`project_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `newUser` FOREIGN KEY (`prou_userb`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `taskProject` FOREIGN KEY (`task_project`) REFERENCES `project` (`project_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `taskUser` FOREIGN KEY (`task_user`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `role` FOREIGN KEY (`user_role`) REFERENCES `role` (`Role_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
