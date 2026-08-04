// FAQ Data - synced from ios/PeregrinePlanner/Screens/HelpView.swift (HelpContent.faqs)
const faqs = [
    { id: "1", question: "How do I log birds I've seen during my trip?", answer: "Open your active trip from Trip Logs, find the bird in your itinerary, and tap the checkbox next to it to mark it as seen. You can also add notes and the number of birds spotted. These sightings automatically appear in your Life List. You can also use the \"Add Sighting\" button in Trip Logs to log birds outside of planned trips." },
    { id: "2", question: "How accurate is the AI bird identification?", answer: "AI bird identification is experimental and should always be validated. Sound detection uses the Cornell BirdNET model; photo identification uses a Google AIY vision model. Accuracy depends on audio/image quality, background noise, lighting, and bird visibility. Confidence scores indicate the model's certainty, but even high-confidence results should be verified with field guides or expert birders." },
    { id: "3", question: "How do I use the real-time bird sound detection?", answer: "Go to ID > Bird Sounds Detection and tap Start to begin listening. Grant microphone permissions when prompted. Choose your sensitivity level — High detects more birds but may include false positives, while Low is more conservative. Detected species appear with confidence scores, and non-bird sounds (traffic, human voices, other animals) are automatically filtered out. When you stop, detected birds are saved to a trip log, which you can merge into an existing trip or keep separate." },
    { id: "4", question: "How do I use AI bird photo identification?", answer: "Go to ID > Bird Image Detection to identify birds from your photos. Select up to 20 photos from your gallery, or take new ones with the camera. The AI analyzes each image and groups results by species with confidence scores. For best results, use clear, well-lit photos showing the bird prominently. Save results to a new or existing trip. Remember AI identification is experimental and should be verified with field guides." },
    { id: "5", question: "How do I use AR Bird Identification?", answer: "Go to ID > AR Bird Identification and grant camera permissions to begin. Point your camera at a bird to see a live species name and confidence score. Choose continuous detection (automatic, on a timer), tap-to-detect, or manual capture mode, and adjust the confidence threshold to control sensitivity. When you're done, save your session's detections to a trip log." },
    { id: "6", question: "What are the bird thumbnail images and bird cards?", answer: "Peregrine Planner displays small thumbnail images next to bird names throughout the app, sourced from iNaturalist.org. Tap any thumbnail to open a bird card with the species' common and scientific name, external links to eBird/Wikipedia/iNaturalist, and photo attribution. Images are cached for offline viewing." },
    { id: "7", question: "What is the AI Bird ID Assistant and how do I use it?", answer: "The AI Bird ID Assistant is a conversational assistant that helps answer questions about bird identification, behavior, and habitat. Access it through the ID tab to have natural conversations about birds — ask questions like \"What does a Cardinal look like?\" or \"How can I tell the difference between Cooper's Hawk and Sharp-shinned Hawk?\" Bird species mentioned in responses appear as clickable cards showing photos and details, with a confidence indicator on each answer." },
    { id: "8", question: "What types of questions can I ask the AI Bird ID Assistant?", answer: "The assistant handles species identification (\"What does a Robin look like?\"), species comparisons (\"What's the difference between Cooper's Hawk and Sharp-shinned Hawk?\"), habitat questions (\"Where do Cardinals live?\"), behavioral questions (\"How do woodpeckers behave?\"), and general questions about bird sounds. It draws on a local database of ~1,300 North American and European species. For best results, be specific in your questions." },
    { id: "9", question: "Why don't some birds show thumbnail images, and what are placeholder bubbles?", answer: "Not all bird species have photos available in the iNaturalist database, which is the source for bird thumbnails. When no image is available, you'll see a placeholder bubble with the first letter of the bird's name — tapping it still opens the bird card with whatever identification information is available. Coverage improves over time as more photographers contribute to iNaturalist." },
    { id: "10", question: "How do I manage the image cache and storage?", answer: "Peregrine Planner automatically caches bird thumbnail images from iNaturalist for faster loading and offline viewing. You can disable bird image thumbnails entirely in More > Settings if you want to reduce data usage — when disabled, you'll see simple letter placeholders instead of photos." },
    { id: "11", question: "How do I access detailed bird information cards?", answer: "Tap any bird thumbnail or placeholder bubble wherever you see one — in trip plans, trip logs, species lists, the Hotspot Browser, Life List, or State Birds — to open its bird card. Each card includes the common and scientific name plus quick links to eBird, Wikipedia, and iNaturalist for further reading." },
    { id: "12", question: "How can I contribute my bird sightings to eBird?", answer: "eBird.org is where the app's own observation data comes from, and it's easy to contribute back: log your sightings in Peregrine Planner, then visit eBird.org directly to record the same observations there using their site or app. This helps support a global citizen-science project tracking bird populations and migration." },
    { id: "13", question: "How do I use the Add Sighting feature?", answer: "Add Sighting lets you log birds you see outside your planned trips. From Trip Logs, tap \"Add Sighting\", select the birds you spotted, then tap \"Select on Map\" to choose the exact location — tap anywhere on the map to set coordinates and give the location a name (e.g. \"Central Park Lake\" or \"My Backyard\"). Confirm to add the sighting to your current trip, or create a new one." },
    { id: "14", question: "How do I view my birding locations on the Trip Map?", answer: "Go to Log > Trip Map and load the map to see all your logged birding locations as markers, with the number of birds logged shown per marker. Tap any trip in the list below the map to highlight just that trip's locations and zoom to its area." },
    { id: "15", question: "What is the Species Map screen and how do I access it?", answer: "The Species Map shows recent bird observations from eBird on an interactive map, similar to a hotspot coverage map. Access it by tapping \"Species Map\" in the Plan tab's action bar. Use it to explore bird sightings across your area to help plan trips." },
    { id: "16", question: "How do I plan my first birding trip?", answer: "Set your starting location by tapping the location button in the Plan tab's action bar, select birds you want to see from the list, choose your trip duration, then tap \"Plan My Birding Trip\" to generate an itinerary. The Learn tab also has a guided, simplified trip-planning tutorial for new users." },
    { id: "17", question: "What is the Learn tab and how does it help new birders?", answer: "The Learn tab offers structured activities for new birders: \"Learn About Birds\" (an interactive flashcard-and-quiz guide to common local species), \"Plan Your Trips\" (a simplified, guided trip-planning tutorial), \"Practice Observing\" (a listen/observe/describe exercise combining sound detection with field observation), and \"Bird Challenges\". Complete activities to earn points and track your progress toward a birder badge." },
    { id: "18", question: "Can I change the location for my trip?", answer: "Yes — tap the location button in the Plan tab's action bar to open the location picker. You can tap anywhere on the map to set a custom location or use your current location. If you have both set, you can choose to start your route from your current location instead of your search location." },
    { id: "19", question: "What is the Life List screen?", answer: "The Life List shows every bird species you've marked as \"seen\" across all your trips — your personal birding record. Each entry shows a thumbnail image; tap it to open the bird card, or tap the bird's name to see every location and date you've spotted that species, with a link back to the original trip log." },
    { id: "20", question: "What are hotspots and how do I use them?", answer: "Hotspots are locations known for good birding, usually with many reported sightings. Use the Hotspot Browser (from the Plan tab's action bar) to explore nearby hotspots and see which birds have been spotted there recently — select a hotspot's birds to add them to your trip plan." },
    { id: "21", question: "How do I use the AI bird identification features?", answer: "The ID tab has four AI-powered tools: Bird Sounds Detection (real-time audio), Bird Image Detection (photo analysis), AR Bird Identification (live camera overlay), and the AI Bird ID Assistant (conversational Q&A). All are experimental and should be validated with field guides." },
    { id: "22", question: "How do I import a trip from a file?", answer: "From Log > Trip Logs, tap the import button and select a trip file (.json format) from your device. Any photos included in the file are automatically saved and linked to their corresponding bird sightings, along with all metadata (date, location, species)." },
    { id: "23", question: "How does the app determine which birds I might see?", answer: "The app uses recent observation data from eBird.org to show birds reported near your location within your selected time frame (7-30 days). eBird is a project of the Cornell Lab of Ornithology that collects bird observations from birdwatchers worldwide." },
    { id: "24", question: "What do the rarity indicators mean?", answer: "Birds are assigned rarity scores based on recent eBird observation data, with rarer species highlighted with a star indicator in bird lists and itineraries." },
    { id: "25", question: "How can I export or share my birding trips?", answer: "Open a trip in Trip Logs and use the share action to export it as a JSON file (importable by other app users), a plain-text summary shareable via email/messaging/any app that accepts the iOS share sheet, or Add to Calendar to create one all-day event per trip day. PDF export is not currently available." },
    { id: "26", question: "What is the State Goals feature?", answer: "State Goals tracks your progress toward seeing every official state bird from the eBird taxonomy. Set your home state in More > Settings, then visit Log > State Birds to see which you've spotted (checkmarked) and which remain, along with your overall completion percentage." },
    { id: "27", question: "How do I export my trips to share with friends?", answer: "Open a saved trip in Trip Logs and use the share action to export it as a JSON file or plain-text summary, then share it via email, messaging apps, or any other sharing method. Recipients can import your JSON export using the Import Trip feature." },
    { id: "28", question: "How do I change from miles to kilometers?", answer: "Go to More > Settings and toggle \"Use Metric Units\" to switch distances to kilometers." },
    { id: "29", question: "What are the notification settings for?", answer: "Notification settings control when the app alerts you. The app sends notifications when birds are detected during a Bird Sounds Detection session, showing the species name and confidence percentage. Customize notification preferences in More > Settings." },
    { id: "30", question: "How can I support the app?", answer: "The app includes an optional tip jar where you can support ongoing development. Access it from More > Settings under \"Support the App\"." },
    { id: "31", question: "How do I report a bug or suggest a feature?", answer: "Go to More > Help & Info and select the Contact Support tab. Fill out the form to report bugs, request features, or ask questions — it opens your email app addressed to peregrineplanner@gmail.com." },
    { id: "32", question: "Where does the bird data come from?", answer: "All bird observation data comes from eBird.org, one of the world's largest biodiversity citizen-science projects, managed by the Cornell Lab of Ornithology. Bird thumbnail images come from iNaturalist.org." },
    { id: "33", question: "How do photos work with trip imports and exports?", answer: "The per-trip JSON export (for sharing a trip with other app users) intentionally leaves photos and personal notes/seen-status out, keeping it a clean, shareable trip plan. If you want an export that includes your photos — for backing up or moving to a new phone — use Data Backup & Migration in More > Settings instead, which captures everything." },
    { id: "34", question: "What does \"Start route from current location\" do?", answer: "This option changes how your trip route is planned. Normally trips are optimized starting from your custom search location; enabling this option instead creates a route starting from wherever you currently are, useful when you're searching a specific area but starting your trip from somewhere else. It only appears when your current and search locations differ." },
    { id: "35", question: "How do I select and name locations for my bird sightings?", answer: "When adding an ad-hoc sighting, tap \"Select on Map\" to open the location picker, tap anywhere on the map to set coordinates, then enter a custom name for the location (like \"Central Park Lake\" or \"My Backyard\"). Both coordinates and a name are required to save the sighting." },
    { id: "36", question: "How does bird sound identification work?", answer: "Peregrine Planner uses BirdNET, a machine learning model trained on millions of bird vocalizations, to identify species from audio. Bird Sounds Detection (in the ID tab) continuously listens and identifies species in real time as you record." },
    { id: "37", question: "What is real-time bird detection and how do I use it?", answer: "Real-time bird detection continuously monitors for bird sounds and automatically identifies species as they vocalize. Access it from ID > Bird Sounds Detection using the Start/Stop control. Detected species are added to a session trip log with timestamps and confidence scores; you can adjust sensitivity and toggle enhanced processing for improved accuracy." },
    { id: "38", question: "How accurate is the bird sound identification and what factors affect it?", answer: "Bird sound identification uses BirdNET, trained on millions of bird vocalizations and capable of identifying thousands of species. Accuracy improves during peak bird activity (dawn/dusk), with less background noise, and with longer recordings that capture a complete vocalization. Confidence scores indicate certainty — multiple detections of the same species increase confidence." },
    { id: "39", question: "How are sound-identified birds added to my trip logs and life list?", answer: "Birds identified through sound detection are automatically added to a session trip log with the detection method, confidence score, and timestamp. When your session ends, you can merge these into an existing trip or keep them as their own trip. All sound-identified birds appear in your Life List and Big Month tracking like any other sighting." },
    { id: "40", question: "How does AI detection integrate with my existing trip plans?", answer: "When you finish a Bird Sounds Detection, Bird Image Detection, or AR Identification session and have other active trips, the app offers to merge your detections into one of them via a trip picker, or keep the session as its own separate trip. Nothing in your existing planned locations is removed or overwritten." },
    { id: "41", question: "How does the interactive quiz system work in Learn About Birds?", answer: "After studying a set of 5 birds in the Learn About Birds activity, you'll automatically take a multiple-choice quiz covering identification, key features, and habitats for those birds. Score at least 80% to advance to a new set of 5; otherwise the same set repeats for review." },
    { id: "42", question: "What is location-based learning and how does it adapt to my area?", answer: "Learn About Birds fetches real eBird observations from your current (or custom) location and selects 5 birds at a time from species actually found in your area, so you're studying birds you're likely to actually encounter. Changing your location updates the content." },
    { id: "43", question: "How do I track my learning progress?", answer: "Your Learn About Birds progress (birds learned, current set) is saved automatically and shown on the Learn tab's progress card alongside your total points and challenge points." },
    { id: "44", question: "Can I mark birds as learned directly from the bird cards?", answer: "Yes — each bird's detail view in Learn About Birds has a \"Mark as Learned\" button." },
    { id: "45", question: "What are the smart features of AI sound detection?", answer: "Bird Sounds Detection filters out non-bird sounds (human voices, traffic, machinery, other animals) automatically, so your detection list contains only actual bird species. It sends lock-screen notifications for new detections and supports enhanced processing mode for improved accuracy via cross-window voting." },
    { id: "46", question: "How do Bird Challenges work?", answer: "Bird Challenges are gamified activities encouraging real-world birding. Daily challenges reset each day, weekly challenges reset Mondays, and monthly challenges reset on the 1st. Access them from Learn > Bird Challenges. Progress tracks automatically as you use the app's other features — no manual entry needed." },
    { id: "47", question: "How does automatic challenge progress tracking work?", answer: "The app tracks challenge progress automatically as you use it normally. Marking birds \"seen\" in trip logs counts toward identification and species-diversity challenges. AI sound/photo/AR detections count toward their respective challenges. Behavior and migration logs count toward monthly research challenges. Habitat type is automatically determined from location names and species data for habitat-exploration challenges. You don't need to do anything extra — just go birding and log your sightings as usual." },
    { id: "48", question: "What types of challenges are available and how do I complete them?", answer: "Daily challenges focus on immediate identification, sound-detection, and photo-capture goals. Weekly challenges focus on species diversity, habitat exploration, and rare-bird discovery. Monthly challenges focus on migration tracking and behavior study, using the dedicated Behavior Logging and Migration Tracking screens in the ID tab. All progress updates automatically as you use the app's features." },
    { id: "49", question: "How do I use Behavior Logging to record bird behaviors?", answer: "Go to ID > Behavior Logging. Select a species, choose from 14 behavior categories (Feeding, Nesting, Social Interaction, Territorial Display, Courtship, Foraging, Preening/Grooming, Flight Behavior, Vocalizing/Singing, Bathing, Roosting/Resting, Aggressive Behavior, Migration Movement, Other), describe what you observed, and record details like duration (using the built-in timer), number of birds, location, and weather. Behavior logs are independent of trips and automatically count toward monthly challenges. Review them in Log > Behavior Logs." },
    { id: "50", question: "How do I use Migration Tracking to record bird movements?", answer: "Go to ID > Migration Tracking. Select a species, record its migration status (Actively Migrating, Staging/Resting, Arriving, Departing, Overwintering, At Breeding Grounds, or Vagrant/Off-course), plus flock size, direction, altitude, and time of day. The app automatically detects the current season for context. Migration logs are independent of trips and count toward monthly challenges. Review them in Log > Migration Logs." },
    { id: "51", question: "How do I access and manage my Behavior and Migration logs?", answer: "Go to the Log tab and select \"Behavior Logs\" or \"Migration Logs\" — these are separate from your regular trip logs. Each shows your recorded observations with species, details, timestamps, and location names. Delete individual entries as needed." },
    { id: "52", question: "What's the difference between trip-based observations and standalone behavior/migration logs?", answer: "Trip-based observations (Trip Logs, Life List, State Birds, Big Month) are your general birding activity — species you've spotted during outings, contributing to your Life List and shareable exports. Standalone Behavior and Migration logs are focused research observations recorded independently of trips, contributing specifically to monthly research-style challenges. Use trip logging for regular birding; use the standalone logs when documenting detailed behavior or migration patterns." },
    { id: "53", question: "How do I create and manage birding story journals?", answer: "\"Tell Your Story\" (in Log > Tell Your Story) lets you create journals combining trip data, photos, and personal narrative. Set a date range to pull in trips, behavior logs, and migration logs from that period, write your narrative, and the app generates species and behavior summaries automatically. Export your story as text, or share a simplified version through the standard share sheet. To make changes later, open the story and tap Edit — you can update the title, narrative, date range, selected trips/logs, and photos at any time." },
    { id: "54", question: "How do I use Observe Mode and its challenge system?", answer: "Observe Mode (Learn > Practice Observing) is a guided listen → observe → describe → compare exercise. You must complete two full rounds (listen for a bird, then describe what you see) in a session to finish the activity — this reinforces consistent identification skills rather than a single lucky guess." },
    { id: "55", question: "How do I use hotspot notes to enhance my birding locations?", answer: "While browsing hotspots, you can add a personal note about a location — access points, best viewing spots, seasonal patterns, or other observations. Notes are saved locally and persist across sessions." },
    { id: "56", question: "How does the Learn tab help me become a better birder?", answer: "The Learn tab combines structured activities with challenge tracking for a complete picture of your birding progress. Your progress card shows both learning-activity points and challenge points, contributing together to your birder badge (New Birder through Birding Expert). Four activities — Learn About Birds, Practice Observing, Plan Your Trips, and Bird Challenges — build different birding skills." },
    { id: "57", question: "How do I view my completed challenges and points?", answer: "Learn > Bird Challenges shows your total points and completed-vs-total count at the top, with each daily/weekly/monthly challenge listed below showing a live progress bar, points value, and completion status." },
    { id: "58", question: "How do I log behavior and migration observations quickly?", answer: "Use the dedicated Behavior Logging and Migration Tracking screens in the ID tab for detailed, structured observations — these are the primary way to record behavior/migration data and are what count toward the related monthly challenges." },
    { id: "59", question: "How does habitat detection work for the Habitat Explorer challenge?", answer: "When you log a bird with a location, the app automatically classifies the habitat type (woodland, water, or urban) using the species' known habitat data and the location name, without any manual input needed." },
    { id: "60", question: "What is the AI Bird ID Assistant's knowledge based on?", answer: "The assistant draws on a local database of roughly 1,300 North American and European bird species (identification features, size, habitat, behavior, similar species) plus optional Wikipedia summaries. It does not currently cross-reference real-time eBird sightings for \"birds near me\" style questions — for local sighting data, use the Plan tab or Species Map instead." },
    { id: "61", question: "Why did my AI bird identification confidence seem low or uncertain?", answer: "Confidence scores reflect the model's own certainty and are affected by real-world factors like background noise, image lighting/clarity, and how distinctive the species' call or appearance is. Low confidence doesn't necessarily mean the identification is wrong — but always cross-check with a field guide, especially for rare or unusual sightings." },
    { id: "62", question: "Can I correct or dismiss an incorrect AI detection?", answer: "Yes — in Bird Sounds Detection and Bird Image Detection, tap \"Not this\" on a detected species to remove it from your session results before saving. In AR Bird Identification, tap a detection card to remove it." },
    { id: "63", question: "How do I set my home state and why does it matter?", answer: "Set your home state in More > Settings. It's used by the State Birds Goals feature to filter the official state bird checklist, and by Learn About Birds as a fallback source of local species when eBird observation data isn't available for your exact location." },
    { id: "64", question: "Is my birding data backed up anywhere?", answer: "All your trips, sightings, logs, photos, and settings are stored locally on your device — there is currently no automatic cloud sync. To back up everything or move to a new phone, use Data Backup & Migration in More > Settings, which exports all of it (including photos) as one file." },
    { id: "65", question: "What is the directional mic array accessory?", answer: "It's an optional, separately-built ESP32-S3 4-microphone hardware accessory that adds direction-finding to Bird Sounds Detection. Once paired, tap the location icon next to a detected species during a listening session to see an arrow pointing toward it (left/right only, relative to the accessory's own forward mark) plus a getting closer/farther/steady trend. Set it up from More > Settings > Mic Array — see the Directional Mic Array section of the User Guide tab above for the firmware download." },
    { id: "66", question: "Why does the mic array's direction arrow update slowly or not at all?", answer: "The direction only refreshes when the app confirms a fresh detection of the specific species you're tracking, not on every sound the array hears — this keeps it from jumping around on background noise or other birds, at the cost of updating less often than raw audio would. If it's not showing anything, confirm the accessory shows \"Connected\" in More > Settings > Mic Array, and try lowering the \"Direction Sensitivity\" slider there, which controls how confident a reading needs to be before it's shown at all." },
    { id: "67", question: "How do I move all my data to a new phone?", answer: "Go to More > Settings > Advanced > Data Backup & Migration and tap Export All Data — this bundles every trip, sighting, photo, behavior/migration log, story, hotspot note, challenge progress record, and setting into one file, which you can AirDrop, save to Files/iCloud Drive, or email to yourself. On your new phone, once the app is installed, use Import All Data and select that file. Note that importing replaces whatever's currently on the destination device rather than merging — export a backup of that device first if it has data you don't want to lose." },
    { id: "68", question: "What is Radar Mode in the directional mic array?", answer: "Radar Mode shows a live bearing for up to 4 species calling at the same time, instead of tracking just one. It works by isolating each species' typical call frequency range separately, so a busy multi-bird soundscape is more likely to produce a distinct direction per species rather than one reading for whichever call happens to be loudest. Toggle it on in Bird Sounds Detection once the mic array is connected — it runs alongside single-species tracking, not instead of it." },
    { id: "69", question: "What is the Rear Sensor and what does \"may be behind you\" mean?", answer: "The main mic array can only tell left from right, never front from back — it's a real hardware limit, not a bug. The Rear Sensor is an optional second, single-mic unit you can build and mount facing the opposite direction from the main array; when it hears a moment significantly louder than the front array did, the app flags that specific reading as possibly coming from behind rather than trusting the displayed direction at face value. It's a coarse hint, not a corrected position. Enable it separately from the main array in More > Settings > Mic Array, and download its firmware alongside the main array's below." },
    { id: "70", question: "What are Learned Frequency Bands in the Mic Array settings?", answer: "Directional tracking narrows in on a species' typical call frequency to isolate it from background noise, starting from a general per-species estimate. The app also keeps a running average of the real frequency range it actually measures each time you track that species, and — once \"Seed Tracking from Learned Data\" is turned on — uses that real history instead of the general estimate once at least 3 confirmed detections have accumulated for it. Measurement happens automatically in the background whether or not the toggle is on, and can be cleared with \"Reset Learned Data\" in the same settings screen." },
    { id: "72", question: "How do I search my trip logs?", answer: "Trip Logs has a search bar at the top — type a trip name, a location, or a species you saw, and the list filters live. It searches trip names, notes, start/end locations, individual stop names, and every logged species across all your trips." },
    { id: "73", question: "I logged the same outing twice — can I combine them?", answer: "Yes. Go to More > Settings > Advanced > Find & Combine Similar Trips. It automatically groups trips that share a date and at least one matching location, so you can review likely duplicates (e.g. one logged manually and one imported from eBird) and merge them. Combining keeps every sighting and photo from each selected trip rather than picking one copy and discarding the rest — the surviving trip ends up with everything. This is different from \"Remove Duplicate Trips\" nearby, which only catches exact name+date matches and deletes the losing copies outright." },
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
        title: 'Quickstart Guide',
        content: 'The Quickstart tab provides step-by-step instructions to get you started quickly with the most important functions.'
    },
    {
        title: 'Comprehensive User Guide',
        content: 'The User Guide provides detailed instructions for all features. This is your go-to resource for in-depth information about using the app.'
    },
    {
        title: 'Frequently Asked Questions',
        content: 'The FAQ section contains answers to common questions. Use the search function to quickly find specific topics.'
    }
];

// Initialize the help system
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeFAQ();
    initializeBackToTop();
    initializeContactForm();
    initializeOrientationTour();
    initializeDeepLink();
});

// Deep-link support: a URL like index.html#guide opens straight to that tab; a URL like
// index.html#firmware-download opens the tab containing that element and scrolls to it. Lets the
// app link straight to the firmware download instead of dropping users on the Quickstart tab.
function initializeDeepLink() {
    const target = window.location.hash.replace('#', '');
    if (!target) return;
    const validTabs = ['quickstart', 'guide', 'faq', 'contact'];
    if (validTabs.includes(target)) {
        switchTab(target);
        return;
    }
    const el = document.getElementById(target);
    if (!el) return;
    const tabContent = el.closest('.tab-content');
    if (tabContent) switchTab(tabContent.id);
    setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
}

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
            faq.answer.toLowerCase().includes(query)
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