// FAQ Data
const faqs = [
    {
        id: '1',
        question: 'How do I log birds I\'ve seen during my trip?',
        answer: 'Open your active trip from the Trip Logs screen, find the bird in your itinerary, and tap the checkbox next to it to mark it as seen. You can also add notes and the number of birds spotted. These sightings will automatically be added to your Life List. Additionally, you can use the "Add Sighting" floating button in the Trip Logs screen to quickly log birds you see outside of planned trips.',
        topics: ['sightings', 'trip log', 'life list'],
        related: ['9', '12', '20']
    },
    {
        id: '21',
        question: 'How accurate is the AI bird identification?',
        answer: 'AI bird identification is experimental and should always be validated. Sound detection uses the Cornell BirdNET model with enhanced sensitivity (3-5% confidence threshold) and optional regional species filtering to improve accuracy for local birds. Photo identification analyzes visual features to suggest species. Accuracy depends on factors like audio quality, background noise, image clarity, lighting conditions, and bird visibility. Confidence scores help indicate the model\'s certainty, but even high-confidence results should be verified with field guides or expert birders. The regional filtering feature can significantly improve accuracy by boosting confidence for species commonly found in your area. Note: The bird database supporting AI features is currently incomplete, so some species may not be recognized or may have limited information. Use AI as a helpful starting point, not a definitive identification.',
        topics: ['ai', 'identification', 'accuracy', 'confidence', 'birdnet', 'regional filtering'],
        related: ['22', '23', '1']
    },
    {
        id: '22',
        question: 'How do I use the real-time bird sound detection?',
        answer: 'Go to ID > Bird Sounds Detection and tap START to begin listening. Grant microphone permissions when prompted. The app uses advanced BirdNET AI with enhanced sensitivity settings (Low/Medium/High) and regional species filtering for improved accuracy. Choose your sensitivity level - High detects more birds but may include false positives, while Low is more conservative. Enable "Regional Species Filter" to boost confidence for birds common in your area. **Smart Detection Features:** When a bird is detected for the FIRST time in your session, a detailed bird information card automatically opens showing habitat, identification features, and photos. For subsequent detections of the same species, the existing entry in your list highlights briefly with a "🔊 Detected again!" message. **Intelligent Filtering:** The app automatically filters out non-bird sounds like human voices, traffic, machinery, and other animals, focusing only on actual bird detections. **Enhanced Processing:** Enable Enhanced Processing for advanced audio quality assessment, noise reduction, and ensemble detection with consensus scoring for improved accuracy. Detected birds are added to a new trip log session. When you finish and birds were detected, you can add them to existing active trips or create a new standalone trip log.',
        topics: ['ai', 'sounds', 'real-time', 'audio', 'sensitivity', 'regional filtering', 'first-time detection', 'highlighting', 'noise filtering', 'enhanced processing'],
        related: ['21', '1', '23', '39']
    },
    {
        id: '23',
        question: 'How do I use AI bird photo identification?',
        answer: 'Go to ID > Bird Photo Detection to identify birds from your photos. You can select multiple photos from your gallery or take new ones with the camera. The AI analyzes each image and provides species suggestions with confidence scores. For best results, use clear, well-lit photos showing the bird prominently. You can view results grouped by species or individually by photo. When you tap "Create New Trip", the app intelligently checks for existing active trips. If you have active trips, you\'ll be offered the option to add detected birds to an existing trip location through a location picker, or create a new trip. This preserves all your existing planned locations while adding the new sightings. Remember that AI identification is experimental and should be verified with field guides.',
        topics: ['ai', 'photos', 'images', 'identification', 'camera'],
        related: ['21', '22', '1']
    },
    {
        id: '2',
        question: 'How do I create a new birding trip?',
        answer: 'Tap the Plan tab, then use the location picker to set your search area. Choose your search radius (1-50 miles) and select dates for your trip. You can either let the app auto-plan optimal locations or manually select specific birds you want to see. The system will analyze recent eBird data to suggest the best hotspots and create an optimized route. Review the suggestions, make any adjustments, and save your trip to get started.',
        topics: ['trip planning', 'plan tab', 'locations', 'routes'],
        related: ['3', '4', '5']
    },
    {
        id: '3',
        question: 'What is the difference between auto-planning and manual planning?',
        answer: 'Auto-planning automatically selects optimal birding locations based on recent eBird data, bird rarity, and accessibility. It\'s great for discovering new spots and maximizing your chances of seeing diverse species. Manual planning lets you choose specific birds you want to target, giving you more control over your trip content. You can combine both approaches - start with auto-planning and then customize by adding or removing specific birds or locations.',
        topics: ['auto-planning', 'manual planning', 'trip customization'],
        related: ['2', '4', '5']
    },
    {
        id: '4',
        question: 'How does the route optimization work?',
        answer: 'The route optimization considers several factors: distance between locations, bird likelihood based on recent sightings, accessibility of hotspots, and your time constraints. By default, routes optimize from your search location, but you can enable "Start route from current location" to begin from wherever you are. The system also offers filtering options like "Exclude seen birds" and "Exclude visited hotspots" to focus on new experiences.',
        topics: ['route optimization', 'distance', 'efficiency', 'customization'],
        related: ['2', '3', '5']
    },
    {
        id: '5',
        question: 'Can I customize my trip after it\'s created?',
        answer: 'Yes! You can edit your trip by adding or removing birds, adjusting locations, and modifying your route. In the Trip Logs screen, open your active trip and use the edit options to make changes. You can also add spontaneous sightings using the "Add Sighting" floating button, which will be incorporated into your trip log.',
        topics: ['trip editing', 'customization', 'modifications'],
        related: ['2', '3', '4']
    },
    {
        id: '6',
        question: 'How do I export my trip to eBird?',
        answer: 'In your completed trip log, tap the export button and select "Export to eBird". This will format your sightings data according to eBird\'s requirements, including species, location, date, and optional notes. You can then upload this data to eBird to contribute to citizen science and share your observations with the global birding community.',
        topics: ['export', 'ebird', 'citizen science', 'sharing'],
        related: ['1', '7', '8']
    },
    {
        id: '7',
        question: 'What data does the app share with eBird?',
        answer: 'When you export to eBird, only the data you choose to share is included: bird species, sighting locations, dates, counts, and optional notes or photos. The app formats this information according to eBird\'s standards. Your personal information and app usage data are never shared with eBird - only the specific sighting data you explicitly choose to export.',
        topics: ['data sharing', 'privacy', 'ebird export'],
        related: ['6', '8', '9']
    },
    {
        id: '8',
        question: 'How is my data stored and protected?',
        answer: 'Your bird sightings, trip data, and photos are stored locally on your device by default. If you enable cloud backup, your data is encrypted and stored securely in our cloud environment. We never share your personal information with third parties without your consent. Location data is only used to provide location-based features and can be disabled in your privacy settings.',
        topics: ['data storage', 'privacy', 'security', 'cloud backup'],
        related: ['7', '9', '10']
    },
    {
        id: '9',
        question: 'How do I build my Life List?',
        answer: 'Your Life List is automatically built as you mark birds as seen during your trips. Each new species you log gets added to your Life List with the date and location of first sighting. You can view your Life List from the main menu, where you can see statistics, search for specific species, and export your list in various formats.',
        topics: ['life list', 'species tracking', 'progress'],
        related: ['1', '10', '11']
    },
    {
        id: '10',
        question: 'Can I add birds I saw before using the app?',
        answer: 'Yes! You can add historical sightings to your Life List using the "Add Sighting" feature. Enter the species, date, location, and any notes you remember. These will be incorporated into your Life List and can be exported to eBird if desired. This helps you maintain a complete record of your birding journey.',
        topics: ['historical sightings', 'life list', 'backfill data'],
        related: ['9', '11', '12']
    },
    {
        id: '11',
        question: 'What is the Big Month feature?',
        answer: 'Big Month is a birding challenge where you try to see as many species as possible within a calendar month. The app tracks your progress, shows statistics, and helps you plan trips to maximize your species count. You can compete with yourself or share your achievements with the birding community.',
        topics: ['big month', 'challenges', 'competition', 'goals'],
        related: ['9', '10', '12']
    },
    {
        id: '12',
        question: 'How do I use the Learn tab?',
        answer: 'The Learn tab provides structured learning activities for birders of all levels. It includes interactive tutorials about bird identification, habitat preferences, and behavior. The content is personalized based on your location, showing birds commonly found in your area. You can track your learning progress and take quizzes to test your knowledge.',
        topics: ['learning', 'education', 'tutorials', 'progress tracking'],
        related: ['13', '14', '15']
    },
    {
        id: '13',
        question: 'What is location-based learning?',
        answer: 'Location-based learning customizes the educational content based on your location or a location you choose. The app selects birds from recent eBird observations in your area, ensuring you learn about species you\'re likely to encounter. This makes your learning more relevant and practical for your local birding experiences.',
        topics: ['location-based learning', 'personalization', 'local birds'],
        related: ['12', '14', '15']
    },
    {
        id: '14',
        question: 'How do the interactive quizzes work?',
        answer: 'After completing each learning module, you\'ll automatically get a quiz to test your knowledge. Quizzes include multiple choice questions about bird identification, habitat, behavior, and other characteristics. Your performance is tracked, and you can retake quizzes to improve your scores and reinforce learning.',
        topics: ['quizzes', 'testing', 'knowledge assessment'],
        related: ['12', '13', '15']
    },
    {
        id: '15',
        question: 'Can I reset my learning progress?',
        answer: 'Yes, you can reset your learning progress anytime from the Learn tab settings. This will clear all completed activities, quiz scores, and progress tracking, allowing you to start fresh. This is useful if you want to review material or if multiple people are using the same device.',
        topics: ['reset progress', 'learning management'],
        related: ['12', '13', '14']
    },
    {
        id: '16',
        question: 'How do I use the Species Map?',
        answer: 'The Species Map shows recent bird sightings in your area based on eBird data. You can filter by species, time period, and location to see where specific birds have been spotted. This helps you plan trips to areas with high bird activity and discover new hotspots you might not have known about.',
        topics: ['species map', 'bird sightings', 'hotspots', 'ebird data'],
        related: ['17', '18', '19']
    },
    {
        id: '17',
        question: 'What are the colored markers on the map?',
        answer: 'Map markers are color-coded to indicate bird diversity and observation frequency. Bright red markers show areas with the highest species counts, while yellow markers indicate lower diversity. Marker size also indicates observation frequency - larger markers mean more frequent sightings. Stars indicate official eBird hotspots, while circles show casual or user-reported locations.',
        topics: ['map markers', 'color coding', 'species diversity'],
        related: ['16', '18', '19']
    },
    {
        id: '18',
        question: 'How do I find nearby birding hotspots?',
        answer: 'Use the Hotspot Browser from the action bar on the Plan screen. This shows nearby birding locations with detailed information about species diversity, recent sightings, and optimal viewing times. You can filter hotspots by distance, species count, and accessibility. Tap any hotspot to see detailed information and recent bird activity.',
        topics: ['hotspots', 'birding locations', 'nearby spots'],
        related: ['16', '17', '19']
    },
    {
        id: '19',
        question: 'What information is available for each hotspot?',
        answer: 'Each hotspot provides comprehensive information including: top 5 species regularly seen, best times of day for observations, seasonal patterns and migration highlights, recent rare sightings, accessibility information, and distance from your location. This helps you decide which locations to visit and when to visit them for optimal birding.',
        topics: ['hotspot information', 'species data', 'timing', 'accessibility'],
        related: ['16', '17', '18']
    },
    {
        id: '20',
        question: 'How do I manage my photo storage?',
        answer: 'You can manage photo storage through More > Settings > Image Cache Management. This lets you clear cached bird images to free up space, adjust cache duration, and control automatic image downloads. Bird photos are cached for offline viewing but you can clear them anytime if storage space is a concern.',
        topics: ['photo storage', 'cache management', 'storage space'],
        related: ['32', '8', '21']
    },
    {
        id: '32',
        question: 'What are the bird thumbnail images and bird cards?',
        answer: 'Peregrine Planner displays small thumbnail images next to bird names throughout the app to help with visual identification. These images are sourced from iNaturalist.org, a global nature community platform. Thumbnails appear in bird lists on the Plan screen, Trip Plans, Trip Logs, Hotspot Browser, Species Map, and Big Month screens. **Enhanced Bird Cards:** Tap any thumbnail or placeholder bubble to open a comprehensive bird information card featuring detailed species information including size, habitat, key identifying features, behavior, best viewing times, colors, and seasonal patterns. Each card includes external links to eBird, Wikipedia, and iNaturalist for additional learning resources. **Advanced Name Matching:** The system intelligently handles various bird naming conventions, including European species with prefixes like "Greater," "Common," "Eurasian," and "Western," ensuring you get accurate information even when exact name matches aren\'t available. Images are cached for 72 hours for offline viewing and automatically update based on the best available photos from iNaturalist\'s extensive database. All images are used with permission under Creative Commons licensing and properly credited to their photographers. You can manage image downloads and cache storage in More > Settings under "Image Cache Management".',
        topics: ['thumbnails', 'bird images', 'bird cards', 'visual identification', 'inaturalist', 'offline', 'cache management', 'species information'],
        related: ['20', '21', '23']
    },
    {
        id: '24',
        question: 'How do I customize my notification settings?',
        answer: 'Go to More > Settings > Notifications to customize your alert preferences. You can enable/disable notifications by category, set the radius for rare bird alerts (1-50 miles), choose notification times, and control which types of birding activity trigger notifications. This helps you stay informed about nearby birding opportunities without being overwhelmed.',
        topics: ['notifications', 'alerts', 'settings', 'customization'],
        related: ['25', '26', '27']
    },
    {
        id: '25',
        question: 'What are the privacy controls for location sharing?',
        answer: 'In More > Settings > Privacy, you can control how your location information is shared. Options include: precise location sharing, approximate location sharing, or no location sharing. You can also choose who can see your locations (everyone, people you\'re following, or no one). These settings help you maintain privacy while still benefiting from location-based features.',
        topics: ['privacy', 'location sharing', 'settings', 'control'],
        related: ['24', '26', '8']
    },
    {
        id: '26',
        question: 'How do I support the app development?',
        answer: 'You can support Peregrine Planner through the tip jar feature in More > Settings > Support the App. Choose from various contribution levels with one-time or recurring options available. Your support helps maintain the app, add new features, and keep the service running smoothly for the birding community.',
        topics: ['support', 'tip jar', 'donations', 'app development'],
        related: ['24', '25', '27']
    },
    {
        id: '27',
        question: 'What advanced trip settings are available?',
        answer: 'Advanced trip settings in More > Settings > Trip Settings include: auto-remove unseen birds option (with time threshold of 1-7 days), trip optimization preferences (prioritize by rarity, distance, or likelihood), maximum daily distances and hours, and trip export formats. These settings help you customize the app to match your specific birding style and preferences.',
        topics: ['advanced settings', 'trip optimization', 'customization'],
        related: ['24', '25', '26']
    },
    {
        id: '28',
        question: 'How do I use the regional species filter?',
        answer: 'The regional species filter is available in the AI bird identification features. When enabled, it boosts confidence scores for bird species commonly found in your area, improving identification accuracy. This filter uses your location and eBird data to prioritize local species, reducing false positives from birds unlikely to be in your region.',
        topics: ['regional filter', 'ai accuracy', 'local species'],
        related: ['21', '22', '23']
    },
    {
        id: '29',
        question: 'What is enhanced processing for sound detection?',
        answer: 'Enhanced processing provides advanced audio quality assessment, noise reduction, and ensemble detection with consensus scoring. This feature analyzes audio quality, filters out background noise, and uses multiple AI models to reach a consensus on bird identification. While it may use more battery and processing power, it significantly improves accuracy, especially in noisy environments.',
        topics: ['enhanced processing', 'audio quality', 'noise reduction', 'consensus'],
        related: ['22', '21', '28']
    },
    {
        id: '30',
        question: 'How do I handle first-time bird detections?',
        answer: 'When the AI detects a bird species for the first time in your session, a detailed bird information card automatically opens showing habitat, identification features, and photos. This helps you learn about the bird while it\'s being detected. For subsequent detections of the same species, the existing entry highlights briefly with a "🔊 Detected again!" message, avoiding repetitive pop-ups.',
        topics: ['first-time detection', 'bird information', 'learning'],
        related: ['22', '32', '12']
    },
    {
        id: '31',
        question: 'Can I use the app offline?',
        answer: 'Yes, many features work offline. Bird identification, trip logs, and your Life List are available without internet connection. Bird images are cached for offline viewing, and you can log sightings offline with automatic sync when connection is restored. However, features requiring real-time data like trip planning and Species Map need internet connectivity.',
        topics: ['offline', 'no internet', 'sync', 'cached data'],
        related: ['32', '20', '8']
    },
    {
        id: '33',
        question: 'How do I report a bug or request a feature?',
        answer: 'You can report bugs or request features through the Contact tab in this help system, or directly through the app\'s feedback option in More > Settings > Contact Support. When reporting bugs, please include details about your device, app version, and steps to reproduce the issue. For feature requests, describe how the feature would improve your birding experience.',
        topics: ['bug reports', 'feature requests', 'support', 'feedback'],
        related: ['34', '35', '36']
    },
    {
        id: '34',
        question: 'How often is the app updated?',
        answer: 'The app receives regular updates with new features, bug fixes, and improvements. Update frequency depends on the significance of changes and user feedback. You can check for updates in your device\'s app store. New features are often announced through in-app notifications and release notes.',
        topics: ['updates', 'new features', 'improvements'],
        related: ['33', '35', '36']
    },
    {
        id: '35',
        question: 'What should I do if the app crashes?',
        answer: 'If the app crashes, try restarting it first. If crashes persist, check for app updates in your device\'s app store. Clear the app cache if the problem continues, and ensure you have sufficient storage space. If issues persist, contact support through the Contact tab with details about when the crash occurs and your device information.',
        topics: ['crashes', 'troubleshooting', 'stability'],
        related: ['33', '34', '36']
    },
    {
        id: '36',
        question: 'How do I back up my data?',
        answer: 'Enable cloud backup in More > Settings > Data Backup to automatically sync your trip logs, Life List, and settings to the cloud. This ensures your birding data is preserved if you switch devices or need to reinstall the app. You can also export your data in various formats for additional backup options.',
        topics: ['backup', 'data sync', 'cloud storage'],
        related: ['8', '31', '35']
    },
    {
        id: '37',
        question: 'What are the system requirements?',
        answer: 'Peregrine Planner requires iOS 13.0 or later for iPhone/iPad, or Android 8.0 or later for Android devices. The app needs access to location services for location-based features, microphone for sound detection, and camera for photo identification. Sufficient storage space is needed for cached images and trip data.',
        topics: ['system requirements', 'compatibility', 'permissions'],
        related: ['31', '35', '36']
    },
    {
        id: '38',
        question: 'How do I change my location settings?',
        answer: 'Location settings can be adjusted in your device\'s system settings for app permissions, and within the app in More > Settings > Privacy. You can enable/disable location services, choose between precise and approximate location, and control how location data is used for features like trip planning and Species Map.',
        topics: ['location settings', 'permissions', 'privacy'],
        related: ['25', '8', '37']
    },
    {
        id: '39',
        question: 'What makes the BirdNET AI detection special?',
        answer: 'The app uses Cornell\'s BirdNET AI model with enhanced sensitivity settings (3-5% confidence threshold) compared to standard implementations. This allows detection of quieter or more distant birds that might be missed with higher thresholds. Combined with regional species filtering, intelligent noise filtering, and enhanced processing options, the system provides highly accurate real-time bird identification from sound.',
        topics: ['birdnet', 'ai model', 'sensitivity', 'accuracy'],
        related: ['22', '28', '29']
    },
    {
        id: '40',
        question: 'How do I interpret confidence scores?',
        answer: 'Confidence scores indicate the AI\'s certainty about a bird identification, shown as percentages. Higher scores (80%+) suggest more confident identifications, while lower scores (20-50%) indicate less certainty. Even high-confidence results should be verified with field guides or expert knowledge. Regional filtering can boost confidence for local species, improving overall accuracy.',
        topics: ['confidence scores', 'ai accuracy', 'interpretation'],
        related: ['21', '28', '39']
    }
];

// DOM elements
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const faqSearch = document.getElementById('faqSearch');
const faqContainer = document.getElementById('faqContainer');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

// Orientation tour
const orientationModal = document.getElementById('orientationModal');
const orientationStep = document.getElementById('orientationStep');
const orientationTitle = document.getElementById('orientationTitle');
const orientationText = document.getElementById('orientationText');
const orientationNext = document.getElementById('orientationNext');
const orientationSkip = document.getElementById('orientationSkip');

let currentOrientationStep = 0;
let filteredFAQs = faqs;
let expandedFAQ = null;

// Orientation tour data
const orientationSteps = [
    {
        title: 'Welcome to Help & Support',
        content: 'This help system contains everything you need to know about using Peregrine Planner effectively. Let\'s take a quick tour of the available resources.'
    },
    {
        title: 'Quick Start Guide',
        content: 'The Quick Start tab provides an overview of key features and gets you started quickly with the most important functions.'
    },
    {
        title: 'Frequently Asked Questions',
        content: 'The FAQ section contains answers to common questions. Use the search function to quickly find specific topics.'
    },
    {
        title: 'Comprehensive User Guide',
        content: 'The User Guide provides detailed instructions for all features. This is your go-to resource for in-depth information about using the app.'
    }
];

// Initialize the help system
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeFAQ();
    initializeBackToTop();
    initializeContactForm();
    initializeOrientationTour();
});

// Tab functionality
function initializeTabs() {
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    // Remove active class from all tabs and contents
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to selected tab and content
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

// FAQ functionality
function initializeFAQ() {
    renderFAQs();
    
    faqSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        filterFAQs(query);
    });
}

function filterFAQs(query) {
    if (!query) {
        filteredFAQs = faqs;
    } else {
        filteredFAQs = faqs.filter(faq => 
            faq.question.toLowerCase().includes(query) ||
            faq.answer.toLowerCase().includes(query) ||
            faq.topics.some(topic => topic.toLowerCase().includes(query))
        );
    }
    renderFAQs();
}

function renderFAQs() {
    faqContainer.innerHTML = '';
    
    if (filteredFAQs.length === 0) {
        faqContainer.innerHTML = '<p>No FAQs found matching your search.</p>';
        return;
    }
    
    filteredFAQs.forEach(faq => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question" onclick="toggleFAQ('${faq.id}')">
                <span>${faq.question}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer" id="faq-${faq.id}">
                <p>${faq.answer}</p>
            </div>
        `;
        faqContainer.appendChild(faqItem);
    });
}

function toggleFAQ(id) {
    const faqAnswer = document.getElementById(`faq-${id}`);
    const icon = faqAnswer.previousElementSibling.querySelector('i');
    
    if (expandedFAQ === id) {
        // Collapse current FAQ
        faqAnswer.classList.remove('expanded');
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
        expandedFAQ = null;
    } else {
        // Collapse previously expanded FAQ
        if (expandedFAQ) {
            const prevAnswer = document.getElementById(`faq-${expandedFAQ}`);
            const prevIcon = prevAnswer.previousElementSibling.querySelector('i');
            prevAnswer.classList.remove('expanded');
            prevIcon.classList.remove('fa-chevron-up');
            prevIcon.classList.add('fa-chevron-down');
        }
        
        // Expand new FAQ
        faqAnswer.classList.add('expanded');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
        expandedFAQ = id;
    }
}

// Back to top functionality
function initializeBackToTop() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact form functionality
function initializeContactForm() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleContactFormSubmit();
    });
}

function handleContactFormSubmit() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Simulate sending (in a real app, this would send to a server)
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    setTimeout(() => {
        alert('Thank you for your message! We\'ll get back to you soon.');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }, 1500);
}

// Orientation tour functionality
function initializeOrientationTour() {
    // Check if user has seen the tour before
    const hasSeenTour = localStorage.getItem('hasSeenHelpTour');
    
    if (!hasSeenTour) {
        setTimeout(() => {
            showOrientationTour();
        }, 1000);
    }
    
    orientationNext.addEventListener('click', nextOrientationStep);
    orientationSkip.addEventListener('click', skipOrientationTour);
}

function showOrientationTour() {
    orientationModal.style.display = 'flex';
    updateOrientationStep();
}

function updateOrientationStep() {
    const step = orientationSteps[currentOrientationStep];
    orientationStep.textContent = `Step ${currentOrientationStep + 1} of ${orientationSteps.length}`;
    orientationTitle.textContent = step.title;
    orientationText.textContent = step.content;
    
    if (currentOrientationStep === orientationSteps.length - 1) {
        orientationNext.textContent = 'Finish';
    }
}

function nextOrientationStep() {
    currentOrientationStep++;
    
    if (currentOrientationStep >= orientationSteps.length) {
        finishOrientationTour();
    } else {
        updateOrientationStep();
    }
}

function skipOrientationTour() {
    finishOrientationTour();
}

function finishOrientationTour() {
    orientationModal.style.display = 'none';
    localStorage.setItem('hasSeenHelpTour', 'true');
    currentOrientationStep = 0;
    orientationNext.textContent = 'Next';
}

// Make toggleFAQ globally accessible
window.toggleFAQ = toggleFAQ;