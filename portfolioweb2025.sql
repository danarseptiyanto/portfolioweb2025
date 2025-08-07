-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Agu 2025 pada 19.52
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolioweb2025`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('356a192b7913b04c54574d18c28d46e6395428ab', 'i:1;', 1754581616),
('356a192b7913b04c54574d18c28d46e6395428ab:timer', 'i:1754581616;', 1754581616),
('livewire-rate-limiter:a17961fa74e9275d529f489537f179c05d50c2f3', 'i:1;', 1754576155),
('livewire-rate-limiter:a17961fa74e9275d529f489537f179c05d50c2f3:timer', 'i:1754576155;', 1754576155);

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_01_08_042327_create_projects_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `project-date` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `client` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  `images` varchar(255) DEFAULT NULL,
  `date-created` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `projects`
--

INSERT INTO `projects` (`id`, `title`, `slug`, `project-date`, `thumbnail`, `description`, `client`, `website`, `images`, `date-created`, `created_at`, `updated_at`) VALUES
(1, 'Belajar Era Digital 1', 'project-belajar-era-digital1', 'September 2023', 'thumbnail/01K22EM52T0CEY91B6TH0SAKN7.png', '# About\n\n**Belajar Era Digital** is a modern, informative website built to support digital literacy seminars for teachers across Indonesia. As education continues to shift toward digital platforms, this project serves as a centralized hub for educators to register, access resources, and engage in discussions related to digital transformation in the classroom. The site not only promotes upcoming events but also functions as an archive for seminar recordings, downloadable materials, and post-event feedback.\n\nTargeted specifically for Indonesian teachers, *Belajar Era Digital* aims to increase access to training on digital tools, remote teaching methods, and modern pedagogical practices that align with the 21st-century learning model.\n![Screeenshot of the login Page](http://127.0.0.1:8000/storage/project/d9zseiyJTzj5ixpge8e8nHU2UZEPXSpNgi80keh0.png)\n\n# Challenges\n\nDeveloping the *Belajar Era Digital* platform came with several unique challenges:\n\n- **Nationwide Reach**: Ensuring the site could perform well across regions with varying internet speeds and device accessibility was a top priority.\n- **User Familiarity**: Since many teachers are still adapting to digital tools, the user interface needed to be intuitive, clean, and mobile-friendly.\n- **Localization**: The platform had to fully support the Indonesian language, with special attention to accessibility for teachers in rural areas.\n- **Seminar Management**: Handling registrations, schedules, and webinar integrations in a smooth and automated way posed technical and logistical hurdles.\n- **Security**: With user registrations and sensitive educational data, the platform needed strong security measures and spam protection.\n\n# Technology\n\nTo meet the needs of a wide and diverse audience, *Belajar Era Digital* was built using reliable and scalable technologies:\n\n- **Frontend**: Tailwind CSS and React (via Inertia.js) provided a fast, responsive, and accessible interface that works well on both desktop and mobile.\n- **Backend**: Laravel 11 served as the main framework, chosen for its robust ecosystem and ease of handling complex backend tasks such as authentication, event scheduling, and form handling.\n- **Database**: MySQL was used to store user data, seminar schedules, registrations, and resources.\n- **Authentication**: Laravel Sanctum was used to handle secure login and user management.\n- **Media Hosting**: Video recordings and large seminar files were hosted using AWS S3 to ensure fast and reliable delivery.\n- **Deployment**: The site was deployed on a VPS using Laravel Forge, with caching and queue workers enabled for performance optimization.\n\n# Results\n\nSince its launch, *Belajar Era Digital* has seen strong engagement from educators across Indonesia:\n\n- Over **5,000+ teachers registered** in the first three months.\n- Hosted **12 live seminars** with an average attendance of 400 participants per session.\n- Collected **1,200+ feedback entries** through post-event surveys.\n- The site maintains a **mobile load speed under 2 seconds**, making it highly accessible even in rural areas.\n- Teachers reported improved digital confidence and appreciation for the simple and structured design of the platform.\n\nThe platform is now being expanded with additional features, including certification downloads, interactive quizzes, and a community forum—marking the beginning of a broader digital transformation journey for teachers throughout the archipelago.\n', 'Belajar Era Digital', 'https://belajareradigital.com/', '[\"images\\/01K22EM5307Y9RE6WDETVZHARA.png\",\"images\\/01K22EM5340XHX8D2PRCH3CJVQ.png\",\"images\\/01K22EM53A0BM9T82N76R7CHD0.png\"]', '2025-08-07 21:17:18', '2025-08-07 07:23:09', '2025-08-07 07:23:09'),
(2, 'Belajar Era Digital 2', 'project-belajar-era-digital2', 'September 2023', 'thumbnail/01K22KBTFHVD98SBBFTDBYP23J.png', '# About\r\n\r\n**Belajar Era Digital** is a modern, informative website built to support digital literacy seminars for teachers across Indonesia. As education continues to shift toward digital platforms, this project serves as a centralized hub for educators to register, access resources, and engage in discussions related to digital transformation in the classroom. The site not only promotes upcoming events but also functions as an archive for seminar recordings, downloadable materials, and post-event feedback.\r\n\r\nTargeted specifically for Indonesian teachers, *Belajar Era Digital* aims to increase access to training on digital tools, remote teaching methods, and modern pedagogical practices that align with the 21st-century learning model.\r\n![Screeenshot of the login Page](http://127.0.0.1:8000/storage/project/d9zseiyJTzj5ixpge8e8nHU2UZEPXSpNgi80keh0.png)\r\n\r\n# Challenges\r\n\r\nDeveloping the *Belajar Era Digital* platform came with several unique challenges:\r\n\r\n- **Nationwide Reach**: Ensuring the site could perform well across regions with varying internet speeds and device accessibility was a top priority.\r\n- **User Familiarity**: Since many teachers are still adapting to digital tools, the user interface needed to be intuitive, clean, and mobile-friendly.\r\n- **Localization**: The platform had to fully support the Indonesian language, with special attention to accessibility for teachers in rural areas.\r\n- **Seminar Management**: Handling registrations, schedules, and webinar integrations in a smooth and automated way posed technical and logistical hurdles.\r\n- **Security**: With user registrations and sensitive educational data, the platform needed strong security measures and spam protection.\r\n\r\n# Technology\r\n\r\nTo meet the needs of a wide and diverse audience, *Belajar Era Digital* was built using reliable and scalable technologies:\r\n\r\n- **Frontend**: Tailwind CSS and React (via Inertia.js) provided a fast, responsive, and accessible interface that works well on both desktop and mobile.\r\n- **Backend**: Laravel 11 served as the main framework, chosen for its robust ecosystem and ease of handling complex backend tasks such as authentication, event scheduling, and form handling.\r\n- **Database**: MySQL was used to store user data, seminar schedules, registrations, and resources.\r\n- **Authentication**: Laravel Sanctum was used to handle secure login and user management.\r\n- **Media Hosting**: Video recordings and large seminar files were hosted using AWS S3 to ensure fast and reliable delivery.\r\n- **Deployment**: The site was deployed on a VPS using Laravel Forge, with caching and queue workers enabled for performance optimization.\r\n\r\n# Results\r\n\r\nSince its launch, *Belajar Era Digital* has seen strong engagement from educators across Indonesia:\r\n\r\n- Over **5,000+ teachers registered** in the first three months.\r\n- Hosted **12 live seminars** with an average attendance of 400 participants per session.\r\n- Collected **1,200+ feedback entries** through post-event surveys.\r\n- The site maintains a **mobile load speed under 2 seconds**, making it highly accessible even in rural areas.\r\n- Teachers reported improved digital confidence and appreciation for the simple and structured design of the platform.\r\n\r\nThe platform is now being expanded with additional features, including certification downloads, interactive quizzes, and a community forum—marking the beginning of a broader digital transformation journey for teachers throughout the archipelago.\r\n', 'Belajar Era Digital', 'https://belajareradigital.com/', '[\"images\\/01K22EM5307Y9RE6WDETVZHARA.png\",\"images\\/01K22EM5340XHX8D2PRCH3CJVQ.png\",\"images\\/01K22EM53A0BM9T82N76R7CHD0.png\"]', '2025-08-07 21:17:18', '2025-08-07 07:23:09', '2025-08-07 08:45:59'),
(3, 'Belajar Era Digital 3', 'project-belajar-era-digital3', 'September 2023', 'thumbnail/01K22EM52T0CEY91B6TH0SAKN7.png', '# About\r\n\r\n**Belajar Era Digital** is a modern, informative website built to support digital literacy seminars for teachers across Indonesia. As education continues to shift toward digital platforms, this project serves as a centralized hub for educators to register, access resources, and engage in discussions related to digital transformation in the classroom. The site not only promotes upcoming events but also functions as an archive for seminar recordings, downloadable materials, and post-event feedback.\r\n\r\nTargeted specifically for Indonesian teachers, *Belajar Era Digital* aims to increase access to training on digital tools, remote teaching methods, and modern pedagogical practices that align with the 21st-century learning model.\r\n![Screeenshot of the login Page](http://127.0.0.1:8000/storage/project/d9zseiyJTzj5ixpge8e8nHU2UZEPXSpNgi80keh0.png)\r\n\r\n# Challenges\r\n\r\nDeveloping the *Belajar Era Digital* platform came with several unique challenges:\r\n\r\n- **Nationwide Reach**: Ensuring the site could perform well across regions with varying internet speeds and device accessibility was a top priority.\r\n- **User Familiarity**: Since many teachers are still adapting to digital tools, the user interface needed to be intuitive, clean, and mobile-friendly.\r\n- **Localization**: The platform had to fully support the Indonesian language, with special attention to accessibility for teachers in rural areas.\r\n- **Seminar Management**: Handling registrations, schedules, and webinar integrations in a smooth and automated way posed technical and logistical hurdles.\r\n- **Security**: With user registrations and sensitive educational data, the platform needed strong security measures and spam protection.\r\n\r\n# Technology\r\n\r\nTo meet the needs of a wide and diverse audience, *Belajar Era Digital* was built using reliable and scalable technologies:\r\n\r\n- **Frontend**: Tailwind CSS and React (via Inertia.js) provided a fast, responsive, and accessible interface that works well on both desktop and mobile.\r\n- **Backend**: Laravel 11 served as the main framework, chosen for its robust ecosystem and ease of handling complex backend tasks such as authentication, event scheduling, and form handling.\r\n- **Database**: MySQL was used to store user data, seminar schedules, registrations, and resources.\r\n- **Authentication**: Laravel Sanctum was used to handle secure login and user management.\r\n- **Media Hosting**: Video recordings and large seminar files were hosted using AWS S3 to ensure fast and reliable delivery.\r\n- **Deployment**: The site was deployed on a VPS using Laravel Forge, with caching and queue workers enabled for performance optimization.\r\n\r\n# Results\r\n\r\nSince its launch, *Belajar Era Digital* has seen strong engagement from educators across Indonesia:\r\n\r\n- Over **5,000+ teachers registered** in the first three months.\r\n- Hosted **12 live seminars** with an average attendance of 400 participants per session.\r\n- Collected **1,200+ feedback entries** through post-event surveys.\r\n- The site maintains a **mobile load speed under 2 seconds**, making it highly accessible even in rural areas.\r\n- Teachers reported improved digital confidence and appreciation for the simple and structured design of the platform.\r\n\r\nThe platform is now being expanded with additional features, including certification downloads, interactive quizzes, and a community forum—marking the beginning of a broader digital transformation journey for teachers throughout the archipelago.\r\n', 'Belajar Era Digital', 'https://belajareradigital.com/', '[\"images\\/01K22EM5307Y9RE6WDETVZHARA.png\",\"images\\/01K22EM5340XHX8D2PRCH3CJVQ.png\",\"images\\/01K22EM53A0BM9T82N76R7CHD0.png\"]', '2025-08-07 21:17:18', '2025-08-07 07:23:09', '2025-08-07 07:23:09'),
(4, 'Belajar Era Digital 4', 'project-belajar-era-digital4', 'September 2023', 'thumbnail/01K22EM52T0CEY91B6TH0SAKN7.png', '# About\r\n\r\n**Belajar Era Digital** is a modern, informative website built to support digital literacy seminars for teachers across Indonesia. As education continues to shift toward digital platforms, this project serves as a centralized hub for educators to register, access resources, and engage in discussions related to digital transformation in the classroom. The site not only promotes upcoming events but also functions as an archive for seminar recordings, downloadable materials, and post-event feedback.\r\n\r\nTargeted specifically for Indonesian teachers, *Belajar Era Digital* aims to increase access to training on digital tools, remote teaching methods, and modern pedagogical practices that align with the 21st-century learning model.\r\n![Screeenshot of the login Page](http://127.0.0.1:8000/storage/project/d9zseiyJTzj5ixpge8e8nHU2UZEPXSpNgi80keh0.png)\r\n\r\n# Challenges\r\n\r\nDeveloping the *Belajar Era Digital* platform came with several unique challenges:\r\n\r\n- **Nationwide Reach**: Ensuring the site could perform well across regions with varying internet speeds and device accessibility was a top priority.\r\n- **User Familiarity**: Since many teachers are still adapting to digital tools, the user interface needed to be intuitive, clean, and mobile-friendly.\r\n- **Localization**: The platform had to fully support the Indonesian language, with special attention to accessibility for teachers in rural areas.\r\n- **Seminar Management**: Handling registrations, schedules, and webinar integrations in a smooth and automated way posed technical and logistical hurdles.\r\n- **Security**: With user registrations and sensitive educational data, the platform needed strong security measures and spam protection.\r\n\r\n# Technology\r\n\r\nTo meet the needs of a wide and diverse audience, *Belajar Era Digital* was built using reliable and scalable technologies:\r\n\r\n- **Frontend**: Tailwind CSS and React (via Inertia.js) provided a fast, responsive, and accessible interface that works well on both desktop and mobile.\r\n- **Backend**: Laravel 11 served as the main framework, chosen for its robust ecosystem and ease of handling complex backend tasks such as authentication, event scheduling, and form handling.\r\n- **Database**: MySQL was used to store user data, seminar schedules, registrations, and resources.\r\n- **Authentication**: Laravel Sanctum was used to handle secure login and user management.\r\n- **Media Hosting**: Video recordings and large seminar files were hosted using AWS S3 to ensure fast and reliable delivery.\r\n- **Deployment**: The site was deployed on a VPS using Laravel Forge, with caching and queue workers enabled for performance optimization.\r\n\r\n# Results\r\n\r\nSince its launch, *Belajar Era Digital* has seen strong engagement from educators across Indonesia:\r\n\r\n- Over **5,000+ teachers registered** in the first three months.\r\n- Hosted **12 live seminars** with an average attendance of 400 participants per session.\r\n- Collected **1,200+ feedback entries** through post-event surveys.\r\n- The site maintains a **mobile load speed under 2 seconds**, making it highly accessible even in rural areas.\r\n- Teachers reported improved digital confidence and appreciation for the simple and structured design of the platform.\r\n\r\nThe platform is now being expanded with additional features, including certification downloads, interactive quizzes, and a community forum—marking the beginning of a broader digital transformation journey for teachers throughout the archipelago.\r\n', 'Belajar Era Digital', 'https://belajareradigital.com/', '[\"images\\/01K22EM5307Y9RE6WDETVZHARA.png\",\"images\\/01K22EM5340XHX8D2PRCH3CJVQ.png\",\"images\\/01K22EM53A0BM9T82N76R7CHD0.png\"]', '2025-08-07 21:17:18', '2025-08-07 07:23:09', '2025-08-07 07:23:09');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('IiLF9Od5Ci9A731YLeoTNN1NGa57CcUsq40LiIJS', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoibXdiZXVhR2hUY1FUTWdrZ3dwRlFGR1VMcVJsZ0tvTkt0VlY1SUIySSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoxNzoicGFzc3dvcmRfaGFzaF93ZWIiO3M6NjA6IiQyeSQxMiRXSUd0YzJNVXRmdmtTQ0NqRGtNSnF1b1p1WjdIZkZxclpYR28wc1Y2THEvQk4xcDVRendxaSI7czo4OiJmaWxhbWVudCI7YTowOnt9fQ==', 1754588888),
('kMJTDtU5aqvv8ma2PjnSaPFBG0CUfYmSX2NVK6g7', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.100.3 Chrome/132.0.6834.210 Electron/34.5.1 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUHo5dUV4YlNLckZqUFNKbklKVkdaU3Zhd3dmRG1vYjBhMmpMUVNDNSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC8/aWRlX3dlYnZpZXdfcmVxdWVzdF90aW1lPTE3NTQ1ODQ4NzQyNzIiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1754584891);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Danar Septiyanto', 'septiyandanar@gmail.com', NULL, '$2y$12$WIGtc2MUtfvkSCCjDkMJquoZuZ7HfFqrZXGo0sV6Lq/BN1p5Qzwqi', NULL, '2025-08-07 07:14:33', '2025-08-07 07:14:33');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indeks untuk tabel `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indeks untuk tabel `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
