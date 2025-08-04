// FAQ Data - Updated from HelpScreen2.js
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
        answer: 'Go to ID > Bird Sounds Detection and tap START to begin listening. Grant microphone permissions when prompted. The app uses advanced BirdNET AI with enhanced sensitivity settings (Low/Medium/High) and regional species filtering for improved accuracy. Choose your sensitivity level - High detects more birds but may include false positives, while Low is more conservative. Enable "Regional Species Filter" to boost confidence for birds common in your area. **Lock Screen Notifications:** When birds are detected, the app automatically sends notifications to your lock screen, even when the app is in the background. The app will request notification permissions when you start detection - allow these to receive alerts. Notifications include the bird species name, confidence percentage, and timestamp. **Confidence Indicators:** Each detected bird displays a color-coded confidence percentage - green (80%+) indicates very high confidence, blue (60-79%) shows good confidence, orange (40-59%) indicates moderate confidence, orange-red (20-39%) shows low confidence, and red (<20%) indicates very low confidence. The system now accepts detections as low as 5% confidence for notifications to avoid missing legitimate bird detections. **Smart Detection Features:** When a bird is detected for the FIRST time in your session, a detailed bird information card automatically opens showing habitat, identification features, and photos. For subsequent detections of the same species, the existing entry in your list highlights briefly with a "🔊 Detected again!" message. **Mark as Incorrect:** Each detected bird has a red ❌ button next to the timestamp. Tap this to mark an identification as incorrect - the bird will be removed from your session and marked with a strikethrough, allowing the AI to re-detect and learn from the feedback. **Intelligent Filtering:** The app automatically filters out non-bird sounds like human voices, traffic, machinery, and other animals, focusing only on actual bird detections. **Enhanced Processing:** Enable Enhanced Processing for advanced audio quality assessment, noise reduction, and ensemble detection with consensus scoring for improved accuracy. Detected birds are added to a new trip log session. When you finish and birds were detected, you can add them to existing active trips or create a new standalone trip log.',
        topics: ['ai', 'sounds', 'real-time', 'audio', 'sensitivity', 'regional filtering', 'first-time detection', 'highlighting', 'noise filtering', 'enhanced processing', 'mark incorrect', 'feedback', 'notifications', 'lock screen', 'confidence indicators', 'color coding'],
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
        id: '24', 
        question: 'How do I use AR Bird Identification?',
        answer: 'Go to ID > AR Bird Identification to use real-time augmented reality bird identification with advanced dual-mode detection. **Getting Started:** Grant camera and microphone permissions when prompted and tap "Start Detection" to begin identifying birds through your camera viewfinder. The app works with both front and back cameras and automatically switches between Expo Camera and Vision Camera for optimal compatibility. **Dual-Mode Detection:** The AR system now combines both visual camera detection AND real-time audio detection for enhanced bird identification. When a bird is detected through both sight and sound simultaneously, the system creates a single fused entry rather than duplicate detections, giving you more accurate and comprehensive bird identification. **Real-time Detection:** Point your camera at birds to see instant identification overlays with common names, scientific names, and confidence scores. Each bird gets a floating card that can be moved around the screen by dragging. The system automatically listens for bird sounds while you\'re using the camera, creating intelligent multi-modal detections. **Smart Detection Labels:** In your trip logs, birds detected through multiple methods will show both "Seen" (eye icon) and "Heard" (sound icon) labels, clearly indicating how each bird was identified. Birds detected through camera only show "Seen" while birds detected through audio only show "Heard". **Interactive Features:** Tap any bird thumbnail in the overlay to open a detailed species card with full-size images, habitat information, and identification features. Use the "Dismiss" button to remove incorrect detections from the screen. The "Save to Trip" button adds the bird to your current trip log and automatically dismisses the overlay. **Multiple Birds:** When multiple birds are detected, you can interact with each overlay independently. The selected overlay appears on top of others for easy access. **Photo Capture:** Use the camera button to capture photos with AR overlays. Photos can be saved with detected species or without species for later identification. **Manual Species Addition:** If no birds are detected in your photo, tap "Add Species" to manually select species from the same searchable eBird taxonomy used throughout the app. Select multiple species at once, preview your selections, and tap "Done" to add them to your photo. **Smart Save Options:** Save photos with species to your trip log, or save without species directly to your photo library. The app prevents data entry errors by using standardized species codes and names. **Settings:** Adjust confidence thresholds from very low (0.1%) to very high (80%) to control detection sensitivity. Enable or disable bounding boxes, confidence scores, and other visual elements. Toggle battery optimization for longer sessions. **Camera Management:** The app includes automatic camera switching and error recovery. If the camera fails to initialize, you can manually override or switch camera types. Remember: AR identification is experimental and should always be validated with field guides or expert birders.',
        topics: ['ar', 'augmented reality', 'real-time', 'camera', 'identification', 'overlays', 'interactive', 'multiple birds', 'photo capture', 'manual species', 'settings', 'confidence threshold', 'dual-mode detection', 'audio detection', 'visual detection', 'fused detection', 'seen heard labels'],
        related: ['21', '22', '23', '1']
    },
    { 
        id: '32', 
        question: 'What are the bird thumbnail images and bird cards?',
        answer: 'Peregrine Planner displays small thumbnail images next to bird names throughout the app to help with visual identification. These images are sourced from iNaturalist.org, a global nature community platform. Thumbnails appear in bird lists on the Plan screen, Trip Plans, Trip Logs, Hotspot Browser, Species Map, Big Month screens, **Life List, and State Goals screens**. **Enhanced Bird Cards:** Tap any thumbnail or placeholder bubble to open a comprehensive bird information card featuring detailed species information including size, habitat, key identifying features, behavior, best viewing times, colors, and seasonal patterns. Each card includes external links to eBird, Wikipedia, and iNaturalist for additional learning resources. **Advanced Name Matching:** The system intelligently handles various bird naming conventions, including European species with prefixes like "Greater," "Common," "Eurasian," and "Western," ensuring you get accurate information even when exact name matches aren\'t available. **Hybrid Species Support:** The app now properly handles hybrid birds and special forms from the eBird taxonomy, ensuring comprehensive coverage of all officially recognized species. Images are cached for 72 hours for offline viewing and automatically update based on the best available photos from iNaturalist\'s extensive database. All images are used with permission under Creative Commons licensing and properly credited to their photographers. You can manage image downloads and cache storage in More > Settings under "Image Cache Management".',
        topics: ['thumbnails', 'bird images', 'bird cards', 'visual identification', 'inaturalist', 'offline', 'cache management', 'species information'],
        related: ['37', '33', '34', '35', '21']
    },
    { 
        id: '35', 
        question: 'What is the AI Bird ID Assistant and how do I use it?',
        answer: 'The AI Bird ID Assistant is an intelligent conversational AI that helps answer questions about birds, identification, behavior, habitat, and more. Access it through the ID tab to have natural conversations about birds. Ask questions like "What does a Cardinal look like?" or "How can I tell the difference between Cooper\'s Hawk and Sharp-shinned Hawk?" The assistant provides detailed responses in a chat interface where each question and answer appears in separate message bubbles. **Enhanced Features:** Bird species appear as clickable cards with confidence percentages - tap any bird name to see detailed information including photos, size, habitat, key features, behavior, seasonal information, and best viewing times. External links to eBird and Wikipedia provide additional resources. **NEW: eBird Integration:** When you ask about birds "near me" or "in my area" and have location services enabled, the assistant now includes real-time eBird sighting data showing recent observations within 25km, popular birding locations, and the best places to look for specific species. The assistant excels at comparison questions, habitat inquiries, and behavioral questions, with access to comprehensive North American bird data.',
        topics: ['ai assistant', 'conversation', 'bird questions', 'identification help', 'comparisons', 'bird links', 'ebird integration', 'local sightings', 'near me'],
        related: ['21', '22', '23', '36']
    },
    { 
        id: '36', 
        question: 'What types of questions can I ask the AI Bird ID Assistant?',
        answer: 'The AI Assistant handles various question types in a natural conversation format: **Species Identification:** "What does a Robin look like?" **Species Comparisons:** "What\'s the difference between Cooper\'s Hawk and Sharp-shinned Hawk?" **Habitat Questions:** "Where do Cardinals live?" **Behavioral Questions:** "How do woodpeckers behave?" **Size Comparisons:** "What birds are robin-sized?" **Complex Questions:** "Show me hawks smaller than Red-tailed Hawks" or "What\'s a cardinal-like bird with a black head?" The assistant provides detailed responses with field marks, behavioral differences, and identification tips. **New Interface Features:** Bird species appear as clickable links with match percentages. Tap any bird name to access detailed species information including photos, habitat, and behavior. You can ask follow-up questions and have flowing conversations. For best results, be specific in your questions.',
        topics: ['ai assistant', 'question types', 'species comparison', 'identification', 'behavior', 'habitat', 'conversation'],
        related: ['35', '21', '22', '23']
    },
    { 
        id: '40',
        question: 'How does the AI Assistant use eBird data for local bird information?',
        answer: 'The AI Bird ID Assistant now integrates real-time eBird observation data to provide location-specific information when you ask about birds "near me," "in my area," or use other location-related phrases. **How it works:** When location services are enabled and you ask location-specific questions, the assistant fetches recent eBird observations within 25km of your location from the past 7 days. **What you get:** Recent sightings with specific locations and dates, identification of popular birding hotspots where species have been seen, recommendations for the best places to look for specific birds, and information about recent birding activity in your area even if the specific species hasn\'t been seen recently. **Example queries:** "Have there been any Cardinal sightings near me?" or "What birds are being seen in my area?" **Fallback behavior:** If no recent sightings are available for a specific species, the assistant shows other recent bird activity in your area and suggests checking eBird for historical data. This feature requires internet connectivity and location permissions to work.',
        topics: ['ai assistant', 'ebird integration', 'local sightings', 'real-time data', 'location services', 'near me', 'recent observations', 'hotspots'],
        related: ['35', '36', '21', '22']
    },
    { 
        id: '33', 
        question: 'Why don\'t some birds show thumbnail images, and what are placeholder bubbles?',
        answer: 'Not all bird species have photos available in the iNaturalist database, which is our source for bird thumbnails. Some reasons images might not appear include: the species hasn\'t been photographed and uploaded to iNaturalist, the bird name doesn\'t match iNaturalist\'s taxonomy, or there are temporary network issues preventing image download. **Interactive Placeholders:** When no image is available, you\'ll see a clickable placeholder bubble with the first letter of the bird\'s name and a small information icon. **Tap these placeholders to access comprehensive bird information cards** with detailed species data including habitat, behavior, identification features, and external learning resources - you don\'t need an image to get valuable bird information! **European Bird Support:** The system has enhanced support for European species with complex naming patterns (like "Greater Whitethroat" or "Eurasian Moorhen"), ensuring you can access bird information even when names don\'t exactly match. The app continuously improves image coverage as more photographers contribute to iNaturalist. You can help by contributing your own bird photos to iNaturalist.org, which benefits the entire birding community. Images are cached for 72 hours, so if a photo becomes available, it will appear after the cache refreshes.',
        topics: ['thumbnails', 'missing images', 'placeholders', 'inaturalist', 'cache', 'community', 'european birds', 'bird cards'],
        related: ['32', '37', '34', '23']
    },
    { 
        id: '34', 
        question: 'How do I manage the image cache and storage?',
        answer: 'Peregrine Planner automatically downloads and caches bird images from iNaturalist for offline viewing and faster loading. You can manage these cached images in More > Settings under "Image Cache Management". The cache management section shows you detailed statistics including the number of cached images, total storage size used, and cache expiry settings. You can clear the entire cache at any time to free up storage space - this is useful if you\'re running low on device storage. Images are automatically cached for 72 hours before expiring and being automatically cleaned up. For data usage control, you can disable bird image downloads entirely using the "Bird Image Thumbnails" toggle in Settings. When images are disabled, you\'ll see simple placeholders with the first letter of each bird\'s name instead of photos. The cache has a 100MB size limit and automatically manages itself by removing the oldest images when full. After clearing the cache, images will be re-downloaded as needed when you view birds again.',
        topics: ['cache management', 'storage', 'data usage', 'settings', 'offline'],
        related: ['32', '33', '15', '16']
    },
    { 
        id: '37', 
        question: 'How do I access detailed bird information cards?',
        answer: 'Peregrine Planner provides comprehensive bird information cards throughout the app for enhanced learning and identification. **How to Access:** Tap any bird thumbnail image or placeholder bubble (circles with letters) wherever you see them - in trip plans, trip logs, species lists, hotspot browsers, monthly tracking, or search results. **What You\'ll Find:** Each bird card includes detailed species information sourced from a comprehensive North American bird database: species size, habitat preferences, key identification features, behavioral patterns, best viewing times, seasonal information, and color descriptions. **External Resources:** Each card provides quick links to eBird (range maps and observations), Wikipedia (detailed species information), and iNaturalist (community photos and observations) for additional learning. **Smart Matching:** The system intelligently handles various bird naming conventions, including regional variations and European species naming patterns, ensuring you get accurate information even when bird names vary slightly. **Always Available:** Bird cards work whether or not images are available - even placeholder bubbles without photos provide full access to comprehensive species information.',
        topics: ['bird cards', 'species information', 'identification', 'habitat', 'behavior', 'external links', 'learning resources'],
        related: ['32', '33', '35', '36', '21']
    },
    { 
        id: '20', 
        question: 'How can I contribute my bird sightings to eBird?',
        answer: 'Peregrine Planner makes it easy to contribute your sightings to eBird.org, which helps support bird conservation worldwide. After marking birds as seen in your trip log, tap the "Actions" button and select "Export for eBird". This creates a special file with all your sighting data formatted for eBird. Then visit eBird.org, sign in, and use their "Upload Data" option to submit your observations. This contributes to a global citizen science project that helps track bird populations, migration patterns, and habitat needs.',
        topics: ['export', 'ebird', 'citizen science', 'contribution'],
        related: ['1', '12', '14', '19']
    },
    { 
        id: '2', 
        question: 'How do I use the Add Sighting feature?',
        answer: 'The Add Sighting feature allows you to log bird sightings that happen outside your planned trips. To use it: 1) Go to Trips > Trip Logs. 2) Tap the green "Add Sighting" floating button in the bottom right. 3) Select the birds you spotted from the list (note: sound identification has been moved to the dedicated ID tab). 4) Tap "Select on Map" to choose the exact location where you saw the birds. 5) Tap anywhere on the map to set coordinates, then enter a custom name for the location (e.g., "Central Park Lake", "My Backyard"). 6) Confirm the location and add your sighting. These sightings will be added to your current trip or create a new trip if needed.',
        topics: ['sightings', 'trip log', 'quick log', 'map', 'location'],
        related: ['1', '9', '23']
    },
    { 
        id: '25', 
        question: 'How do I view my birding locations on the Trip Map?',
        answer: 'The Trip Map shows all your logged birding locations on an interactive map. To use it: 1) Go to Trips > Trip Map. 2) Tap "Load Map" to display your birding locations. 3) Each marker shows a location where you\'ve logged bird sightings, with the number of birds in the marker title. 4) Click any trip in the list below to highlight only that trip\'s locations on the map. 5) The map will automatically center and zoom to show the selected trip area. 6) Use the map button (📍) next to each trip to highlight it, or the eye button (👁️) to view the full trip details. 7) Click a selected trip again to return to viewing all trips.',
        topics: ['trip map', 'map', 'locations', 'visualization', 'trips'],
        related: ['1', '2', '9', '12', '31']
    },
    { 
        id: '31', 
        question: 'What is the Species Map screen and how do I access it?',
        answer: 'The Species Map screen displays recent bird observations from eBird on an interactive map, similar to a hotspot coverage map. You can access it by tapping the "Species Map" button in the action bar on the Plan screen. The map shows observation data as markers, with legend indicators for different data types and time periods. You can filter and explore bird sightings across your area to help plan birding trips. Use the back arrow to return to the Plan screen where you started.',
        topics: ['species map', 'coverage map', 'ebird data', 'navigation', 'action bar'],
        related: ['25', '7', '8', '5']
    },
    { 
        id: '3', 
        question: 'How do I plan my first birding trip?',
        answer: 'To plan your first trip: 1) Set your starting location by tapping the location button in the action bar. 2) Select birds you want to see from the list. 3) Choose your trip duration. 4) Click "Plan My Birding Trip" to generate an itinerary. For additional guidance, check out the Learn tab which provides step-by-step tutorials and practice activities.',
        topics: ['getting started', 'trips', 'planning'],
        related: ['4', '10']
    },
    { 
        id: '4', 
        question: 'What is the Learn tab and how does it help new birders?',
        answer: 'The Learn tab offers structured learning activities for new birders including: "Learn About Birds" - an interactive guide to common species with gamified progress tracking, "Plan Your Trips" - step-by-step trip planning tutorials, and "Practice Observing" - hands-on activities combining sound detection and visual observation skills. Complete activities to earn points and track your birding progress. This replaces the previous beginner mode with a more comprehensive learning experience.',
        topics: ['learn tab', 'tutorials', 'practice', 'gamification', 'learning'],
        related: ['3']
    },
    { 
        id: '5', 
        question: 'Can I change the location for my trip?',
        answer: 'Yes, tap the location button in the action bar (shows "Set Start" or your current address) to open the location picker. You can either tap anywhere on the map to set a custom location or use your current location. When you have both a current location and a custom search location set, you can choose "Start route from current location" in the trip planning options to begin your route from where you are now instead of the search location.',
        topics: ['location', 'maps', 'planning', 'routing'],
        related: ['3', '10', '22'] 
    },
    { 
        id: '6', 
        question: 'What is the Life List screen?',
        answer: 'The Life List screen shows all bird species you\'ve marked as "seen" across all your trips, acting as your personal birding record and achievement tracker. **Enhanced Visual Experience:** Each bird now displays a thumbnail image from iNaturalist.org alongside its name, making it easier to recall and identify species. Tap any thumbnail or placeholder to open a comprehensive bird information card with detailed species information, identification features, habitat, behavior, and external learning resources. **Interactive Sightings:** Click on any bird in your Life List to see detailed sighting information including all the locations and dates where you\'ve spotted that species. **Trip Navigation:** From individual bird sightings, you can navigate directly to the original trip logs where those birds were recorded, making it easy to revisit your birding memories and add additional notes or photos. **Advanced Filtering:** Switch between viewing birds and hotspots visited, with time-based filters (All Time, Year, 6 Months, 3 Months) to track your progress over different periods. **Enhanced Duplicate Detection:** The app now includes intelligent duplicate detection and removal to ensure your Life List accurately reflects unique species without redundant entries. **Detailed Statistics:** View your total species count, rarity scores, first sighting dates, and sighting frequency. The screen shows when and where you first spotted each species, helping you remember your birding journey. **Smart Organization:** Birds are sorted with seen birds first, then alphabetically, and include rarity indicators to highlight your most significant sightings.',
        topics: ['life list', 'records', 'sightings', 'thumbnails', 'bird cards', 'statistics', 'filtering', 'hotspots', 'detailed sightings', 'trip navigation', 'duplicate detection'],
        related: ['1', '2', '13', '32', '33']
    },
    { 
        id: '7', 
        question: 'What are hotspots and how do I use them?',
        answer: 'Hotspots are locations known for good bird watching, usually with many reported sightings. Use the Hotspot Browser (accessible from the action bar) to explore nearby hotspots and see which birds have been spotted there recently. You can select a hotspot and add its birds to your trip plan.',
        topics: ['hotspots', 'locations', 'planning'],
        related: ['8', '5']
    },
    { 
        id: '8', 
        question: 'What does the Coverage Map show?',
        answer: 'The Coverage Map displays hotspots with bird sightings in your area. The size and color intensity of each marker indicates the number of unique bird species observed at that location. Tap on any marker to see the exact species count. Official hotspots are marked with stars, and you can access enhanced data including seasonal patterns and peak observation times.',
        topics: ['maps', 'hotspots', 'planning'],
        related: ['7', '5']
    },
    { 
        id: '26', 
        question: 'How do I use the AI bird identification features?',
        answer: 'The app offers multiple AI-powered identification tools: **ID Tab Features:** Bird Sounds Detection (real-time audio identification) and Bird Photo Detection (image analysis). **AI Bird ID Assistant:** An intelligent conversational AI accessible through the Assistant tab that answers questions about birds, provides species comparisons, and offers identification help. The assistant features a natural chat interface with conversation history, clickable bird links, and confidence indicators. Ask questions like "What does a Cardinal look like?" or "How can I tell Cooper\'s Hawk from Sharp-shinned Hawk?" **Note:** All AI features are experimental and should be validated with field guides. The assistant has access to comprehensive North American bird data but results should always be verified.',
        topics: ['identification', 'AI', 'sound', 'real-time', 'BirdNET', 'assistant'],
        related: ['35', '36', '21', '22', '23']
    },
    { 
        id: '9', 
        question: 'How do I import a trip from a file?',
        answer: 'There are multiple ways to import trips: 1) From Trips > Trip Logs, tap the "Import Trip" button. 2) If you have no trips yet, you\'ll also see an Import Trip button in the empty state. All options will open a file picker where you can select a trip file (.json format) to import. When importing a trip, any photos included in the file will be automatically saved to your device and linked to their corresponding bird sightings. All photo metadata such as date, location, and species information is preserved during import.',
        topics: ['import', 'export', 'sharing', 'photos'],
        related: ['14', '21']
    },
    { 
        id: '10', 
        question: 'How does the app determine which birds I might see?',
        answer: 'The app uses recent observation data from eBird.org to show birds that have been reported near your location within your selected time frame (1-30 days). eBird is a project of the Cornell Lab of Ornithology that collects and distributes bird observations from birdwatchers worldwide.',
        topics: ['birds', 'data', 'planning', 'ebird'],
        related: ['3', '7', '19']
    },
    { 
        id: '11', 
        question: 'What do the rarity indicators mean?',
        answer: 'Birds are assigned rarity scores on a 1-10 scale, with higher numbers indicating rarer species. In bird lists and itineraries, you\'ll see stars (★) next to rarer birds, with more stars indicating higher rarity. You can toggle rarity indicators on/off in your Profile settings.',
        topics: ['birds', 'interface', 'settings'],
        related: ['10']
    },
    { 
        id: '12', 
        question: 'How can I export or share my birding trips?',
        answer: 'You can export any saved trip by opening it in your Trip Log and tapping the "Actions" button. You can export as a file, PDF, or even add it to your calendar. These files can be shared with others via email, messaging apps, or other sharing methods. All exports include your photos with appropriate resolution for each format type. When exporting as a PDF, photos will be compressed for optimal file size, while JSON exports include full-resolution images. Additionally, the "Export for eBird" option creates a special format that can be uploaded to eBird.org to contribute your sightings and photos to their citizen science project. If you prefer not to include photos in your exports for privacy reasons, you can disable this feature in your Profile settings.',
        topics: ['export', 'sharing', 'trips', 'ebird', 'photos', 'privacy'],
        related: ['9', '14', '20', '21']
    },
    { 
        id: '13', 
        question: 'What is the State Goals feature?',
        answer: 'The State Goals feature helps you track your progress toward seeing all official state birds from the eBird taxonomy. In the State Goals screen, you can view which state birds you\'ve already spotted and which ones you still need to find. **Enhanced Visual Experience:** Each bird now displays a thumbnail image from iNaturalist.org alongside its name. Tap any thumbnail or placeholder to open a comprehensive bird information card with detailed species information, identification features, habitat, behavior, and external learning resources. **Intelligent Matching:** The app uses advanced common name matching to accurately track your sightings against the official state bird list, including proper handling of hybrid species and special forms. **Progress Tracking:** See your percentage progress, total birds seen vs. remaining, and search through the complete state bird list. Birds you\'ve seen are clearly marked with a green checkmark and highlighted with a colored border.',
        topics: ['goals', 'tracking', 'birds', 'state birds', 'thumbnails', 'bird cards', 'progress', 'hybrid species'],
        related: ['6', '32', '33', '41']
    },
    { 
        id: '41', 
        question: 'How does the app handle hybrid birds and special forms in State Goals?',
        answer: 'The State Goals feature now has enhanced support for hybrid birds and special forms from the eBird taxonomy. **Intelligent Species Matching:** The app uses advanced common name matching to accurately track your sightings against the official state bird list, regardless of the species code format used in your imported trips. **Hybrid Species Support:** Birds like Blue-winged × Golden-winged Warbler hybrids or other special forms are properly recognized and matched. **Robust Lookup System:** If a species isn\'t found in the main taxonomy, the app performs individual lookups to ensure comprehensive coverage. **Automatic Filtering:** Invalid or placeholder entries are automatically filtered out, so you only see legitimate bird species with proper common names. **Debug Information:** The app provides detailed logging to help identify and resolve any species matching issues. This ensures that your State Goals progress accurately reflects all the birds you\'ve seen, including rare hybrids and special forms.',
        topics: ['hybrid birds', 'species matching', 'state goals', 'taxonomy', 'ebird', 'species codes'],
        related: ['13', '6', '32']
    },
    { 
        id: '14', 
        question: 'How do I export my trips to share with friends?',
        answer: 'You can export any saved trip by opening it in your Trip Log and tapping the "Actions" button. Choose the export format and share the file via email, messaging apps, or other sharing methods. Others can import your trips using the Import Trip feature. Trip exports include all your photos, which are automatically processed according to the export format. JSON exports include full-resolution photos, while PDF and shared exports include compressed photos. If you want to contribute to citizen science, use the "Export for eBird" option to create a file that can be uploaded to eBird.org, helping researchers track bird populations worldwide.',
        topics: ['export', 'sharing', 'trips', 'ebird', 'photos'],
        related: ['9', '12', '20', '21']
    },
    { 
        id: '15', 
        question: 'How do I change from miles to kilometers?',
        answer: 'Go to More > Settings and toggle the "Use Metric Units" setting. This will switch the app to display distances in kilometers instead of miles.',
        topics: ['settings', 'units', 'profile'],
        related: ['16']
    },
    { 
        id: '16', 
        question: 'What are the notification settings for?',
        answer: 'Notification settings let you control when and how the app alerts you. You can receive notifications for rare bird sightings in your area, trip reminders, and other birding-related updates. **New:** The app now sends real-time notifications when birds are detected during Bird Sounds Detection sessions. These notifications appear on your lock screen even when the app is in the background, showing the bird species name, confidence percentage, and detection time. The app will automatically request notification permissions when you start bird detection. Customize general notification preferences in More > Settings.',
        topics: ['settings', 'notifications', 'profile', 'bird detection', 'lock screen', 'real-time'],
        related: ['15', '22']
    },
    { 
        id: '17', 
        question: 'How can I support the app?',
        answer: 'The app includes an optional tip jar where you can make contributions at various levels to support ongoing development. Access the tip jar from More > Settings under "Support the App" to view available contribution options.',
        topics: ['support', 'donations', 'profile'],
        related: []
    },
    { 
        id: '18', 
        question: 'How do I report a bug or suggest a feature?',
        answer: 'Go to More > Help & Info and select the Contact tab. There you can fill out a form to report bugs, request features, or ask questions. Your feedback will be sent directly to our development team at peregrineplanner@gmail.com.',
        topics: ['support', 'bugs', 'contact'],
        related: []
    },
    {
        id: '19',
        question: 'Where does the bird data come from?',
        answer: 'All bird observation data in the app comes from eBird.org, one of the world\'s largest biodiversity-related citizen science projects. eBird is managed by the Cornell Lab of Ornithology and collects millions of bird observations from birdwatchers around the world. Visit eBird.org to learn more. You can also contribute your own sightings by using the "Export for eBird" option in the Trip Log actions menu, creating a file that can be directly uploaded to eBird.org.',
        topics: ['data', 'ebird', 'birds', 'citizen science'],
        related: ['10', '20']
    },
    {
        id: '21',
        question: 'How do photos work with trip imports and exports?',
        answer: 'When you export a trip, all photos from your bird sightings are included in the export file. The resolution depends on the export format: JSON files include full-resolution photos, PDFs include compressed photos, and shared exports include smaller photos for efficiency. When someone imports your trip, all photos are preserved along with their metadata (date, species, location). Photos from imports are automatically saved to the user\'s device photo library and linked to the corresponding sightings. For privacy, you can disable including photos in exports from your Profile settings. You can also manage photos by tapping on any bird sighting to add, edit, or delete photos.',
        topics: ['photos', 'import', 'export', 'sharing', 'privacy'],
        related: ['9', '12', '14']
    },
    {
        id: '22',
        question: 'What does "Start route from current location" do?',
        answer: 'The "Start route from current location" option changes how your trip route is planned. Normally, trips are optimized starting from your custom search location. When this option is enabled, the app creates a route that starts from wherever you currently are and goes directly to the optimized birding locations. This is useful when you want to search for birds in a specific area but start your actual trip from a different location. The option only appears when you have both a current location and a different custom search location set.',
        topics: ['routing', 'planning', 'location', 'optimization'],
        related: ['3', '5', '7']
    },
    {
        id: '23',
        question: 'How do I select and name locations for my bird sightings?',
        answer: 'When adding adhoc sightings, you can precisely select where you saw the birds using an interactive map. After selecting birds in the Add Sighting modal, tap "Select on Map" to open the location picker. Tap anywhere on the map to set the exact coordinates, then enter a custom name for the location (like "Central Park Lake" or "My Backyard"). You can also use the "Use Current Location" button to automatically select your GPS position. The app will suggest a default name based on the current time, but you can change it to anything meaningful. Both location coordinates and a name are required before you can save the sighting.',
        topics: ['location', 'map', 'naming', 'coordinates', 'sighting'],
        related: ['2', '5']
    },
    {
        id: '27',
        question: 'How does sound recording and bird identification work?',
        answer: 'Peregrine Planner includes advanced bird sound identification powered by BirdNET, a machine learning model that can identify bird species from their vocalizations. There are two ways to use this feature: Manual Recording (available in the "Add Bird" modal) and Real-time Detection (available on the Home screen). Manual recording lets you record bird sounds on-demand when you hear something interesting, while real-time detection continuously monitors for bird sounds in the background. Both methods use the same BirdNET AI model to provide accurate species identification with confidence scores.',
        topics: ['sound recording', 'bird identification', 'birdnet', 'audio', 'ai', 'microphone'],
        related: ['28', '29', '30']
    },
    {
        id: '28',
        question: 'How do I use manual sound recording to identify birds?',
        answer: 'Manual recording is available when adding bird sightings. Go to Trip Log → "Add Bird" → tap the microphone icon to start recording. Record for a few seconds while birds are vocalizing, then tap stop. The app will process the audio using the BirdNET AI model and show you any identified species with confidence scores. You can then add the identified birds to your trip log. This method works on all devices and is perfect for identifying birds when you hear interesting sounds during your birding activities. The recording analyzes the entire audio clip to detect multiple bird species that might be present.',
        topics: ['manual recording', 'trip log', 'microphone', 'birdnet', 'identification'],
        related: ['27', '29', '1']
    },
    {
        id: '29',
        question: 'What is real-time bird detection and how do I use it?',
        answer: 'Real-time bird detection continuously monitors for bird sounds in the background and automatically identifies species as they vocalize. Access this feature from the Home screen using the "Real-time Bird Detection" toggle switch. When enabled, the app listens for bird sounds every few seconds and adds any detected species to a consolidated "Real-time Detection Session" trip. All detected birds are automatically added to your trip log with timestamps and confidence scores. The detection frequency automatically optimizes based on your device - newer devices process more frequently while older devices use longer intervals for stability. You can toggle this on/off as needed and the app will handle battery optimization automatically.',
        topics: ['real-time detection', 'background monitoring', 'automatic identification', 'home screen'],
        related: ['27', '28', '30']
    },
    {
        id: '30',
        question: 'What devices support real-time bird detection and how does it optimize for performance?',
        answer: 'Real-time bird detection works on all modern iOS devices but automatically optimizes performance based on your device capabilities. Newer devices (iPhone 12 and later) process audio every 3 seconds for rapid detection. iPhone XS series devices use 8-second intervals with optimized audio processing for stability. Older devices use even longer intervals (10-15 seconds) to ensure reliable operation. The app includes automatic sample rate conversion, memory management, and device-specific optimizations to provide the best experience on your hardware. Manual recording works perfectly on all devices regardless of age. If you experience any issues with real-time detection, manual recording provides the same accurate bird identification.',
        topics: ['device compatibility', 'performance optimization', 'iphone', 'audio processing'],
        related: ['27', '28', '29']
    },
    {
        id: '38',
        question: 'How accurate is the bird sound identification and what factors affect it?',
        answer: 'The bird sound identification uses BirdNET Global V2.4, a state-of-the-art machine learning model trained on millions of bird vocalizations worldwide. The model can identify over 6,500 bird species with high accuracy when provided with clear audio. Factors that improve identification include: recording during peak bird activity (dawn/dusk), minimizing background noise, recording for 3-5 seconds to capture complete vocalizations, and being in areas with good bird diversity. The app shows confidence scores with each identification - higher scores indicate more certain identifications. Multiple detections of the same species increase confidence. For best results, try to record when birds are actively singing rather than just calling.',
        topics: ['accuracy', 'birdnet model', 'confidence scores', 'recording tips', 'machine learning'],
        related: ['27', '28', '29']
    },
    {
        id: '39',
        question: 'How are sound-identified birds added to my trip logs and life list?',
        answer: 'Birds identified through sound (both manual recording and real-time detection) are automatically added to your trip logs with detailed information including the detection method, confidence score, and timestamp. Real-time detections are consolidated into a single "Real-time Detection Session" trip to keep your trip list organized. Manual recordings are added to your current active trip or create a new trip if needed. All sound-identified birds automatically appear in your Life List, Big Month tracking, and can be exported to eBird. The app prevents duplicate entries - if the same species is detected multiple times, only one entry is kept per trip. You can view, edit, and manage sound-identified birds just like any other sighting.',
        topics: ['trip integration', 'life list', 'real-time session', 'duplicates', 'organization'],
        related: ['27', '1', '6', '12']
    },
    { 
        id: '42',
        question: 'How does AI detection integrate with my existing trip plans?',
        answer: 'When you use AI detection (sound or photo) and have existing active trips, the app intelligently offers to merge your detections with planned trips. After detection completes, if active trips exist, you\'ll see a location picker showing your planned hotspots. You can select any existing location to add the detected birds to, or create a new location. This process preserves all your existing planned locations and species - nothing gets removed or overwritten. The detected birds are simply added to your chosen location alongside any birds you may have already logged there. If you prefer, you can always choose to create a separate new trip instead.',
        topics: ['ai integration', 'trip planning', 'location picker', 'merge trips', 'preserve data'],
        related: ['21', '22', '23', '1', '39']
    },
    { 
        id: '43',
        question: 'How does the interactive quiz system work in Learn About Birds?',
        answer: 'After studying all 5 birds in a learning set, you\'ll automatically take a quiz to test your knowledge. The quiz includes multiple choice questions about bird identification, key features, and habitats based on the birds you just studied. You need to score at least 80% to advance to the next set of birds. If you don\'t pass, you can review the birds and try again. The quiz adapts to the specific birds you\'ve learned, ensuring personalized testing of your knowledge.',
        topics: ['quiz', 'learning', 'test', 'knowledge', 'assessment', 'progress'],
        related: ['4', '44', '45']
    },
    { 
        id: '44',
        question: 'What is location-based learning and how does it adapt to my area?',
        answer: 'Location-based learning uses your current location (or custom location if set) to provide relevant bird species for study. The app fetches real eBird observations from your area and randomly selects 5 birds at a time for learning. This ensures you\'re studying birds that are actually found in your region rather than generic species. When you change your location, the learning content automatically updates to show birds appropriate for that new area.',
        topics: ['location', 'learning', 'adaptive', 'regional', 'ebird', 'relevant'],
        related: ['4', '43', '45']
    },
    { 
        id: '45',
        question: 'How do I track my learning progress and achievements?',
        answer: 'Your learning progress is automatically saved and tracked. The app shows how many birds you\'ve learned in the current set and your total count across all sets. Progress includes completed birds, current learning set number, and quiz scores. You can reset your progress anytime to start fresh with new birds. Each learning session builds on previous knowledge while introducing new species from your area.',
        topics: ['progress', 'tracking', 'achievements', 'learning', 'statistics'],
        related: ['43', '44', '4']
    },
    { 
        id: '46',
        question: 'Can I mark birds as learned directly from the bird cards?',
        answer: 'Yes! Each bird card in the Learn About Birds screen has a "Mark as Learned" button at the bottom. You can mark birds as learned without having to open the detailed view first. The button changes to "Learned!" with a green checkmark once completed. You can also tap the bird card to view detailed learning content before marking it as learned.',
        topics: ['marking', 'learned', 'cards', 'buttons', 'interface'],
        related: ['43', '44', '45']
    },
    { 
        id: '47',
        question: 'What are the smart features of AI sound detection?',
        answer: '**First-Time Detection Experience:** When a bird species is detected for the first time in your session, a comprehensive bird information card automatically opens, displaying detailed species information including photos, habitat, behavior, identification features, and external learning resources. This provides immediate educational value for each new bird you encounter. **Subsequent Detection Highlighting:** When the same bird species is detected again during your session, instead of reopening the modal, the existing entry in your detection list highlights with a green glow and displays "🔊 Detected again!" message for 3 seconds, providing clear visual feedback without interruption. **Mark as Incorrect Feedback:** Each detected bird has a red ❌ button that allows you to mark incorrect identifications. When tapped, the bird is removed from your session, shown with strikethrough text, and marked as "Marked as incorrect." This allows the species to be re-detected and helps train the AI with your feedback. **Intelligent Non-Bird Filtering:** The app automatically filters out non-bird sounds including human voices, traffic noise, machinery, weather sounds, other animals, and insects, ensuring your detection list contains only actual bird species. **Enhanced Audio Processing:** Enable Enhanced Processing for advanced features including real-time audio quality assessment (SNR, background noise, wind detection), ensemble detection with multiple audio segments, consensus scoring, and adaptive sensitivity based on environmental conditions. **Start/Stop Button Control:** Use the convenient Start/Stop button instead of a toggle switch for better control over detection sessions, with proper state management and session cleanup.',
        topics: ['ai', 'smart features', 'first-time detection', 'highlighting', 'filtering', 'enhanced processing', 'audio quality', 'session management', 'mark incorrect', 'feedback'],
        related: ['22', '21', '23']
    },
    { 
        id: '48',
        question: 'How do Bird Challenges work?',
        answer: 'Bird Challenges are gamified activities that encourage you to go birding and use the app\'s features in real-world situations. Access challenges through Learn > Bird Challenges or the main navigation. **Types of Challenges:** Daily challenges reset every day at midnight and include quick identification tasks, sound detection goals, and photo capture objectives. Weekly challenges reset every Monday and focus on species diversity, habitat exploration, and rare bird discovery. Monthly challenges reset on the 1st of each month and include migration tracking, behavior studies, and mastery goals. **Automatic Progress Tracking:** Challenges automatically track your progress as you use the app! When you log birds in your trip logs, use AI sound detection, take photos with AI identification, or mark birds as seen, your challenge progress updates in real-time. **Points and Completion:** Each challenge has a point value and specific target (e.g., "identify 3 birds" or "detect 2 bird calls"). When you complete a challenge, you\'ll receive a completion alert and earn points. Points are tracked across all your completed challenges. **Field-Based Activities:** Challenges encourage real-world birding activities like visiting different habitats (woodland, water, urban), finding specific numbers of species, and using various identification methods. All challenges are designed to get you outside and actively birding.',
        topics: ['challenges', 'gamification', 'daily', 'weekly', 'monthly', 'points', 'progress tracking', 'field activities', 'habitats', 'achievements'],
        related: ['49', '50', '1', '22', '23']
    },
    { 
        id: '49',
        question: 'How does automatic challenge progress tracking work?',
        answer: 'The app automatically tracks your challenge progress without any manual intervention - simply use the app normally and your challenges will update! **Trip Logging Integration:** When you mark birds as "seen" in your trip logs, the app automatically counts these toward identification challenges and species diversity goals. Your manual bird sightings contribute to daily and weekly challenge progress. **AI Detection Integration:** Using AI sound detection counts toward sound detection challenges. When the AI identifies birds through audio, these detections automatically advance your "Listen & Learn" type challenges. Photo identification through AI counts toward photography challenges and species collection goals. **Habitat Tracking:** The app intelligently determines habitat types based on location names and bird species data. When you log birds in different locations, it automatically tracks habitat exploration challenges like "find birds in 3 different habitats." **Real-Time Updates:** Challenge progress updates immediately when qualifying activities occur. You\'ll see progress bars fill and receive completion alerts as soon as challenges are finished. **Challenge History:** All completed challenges are automatically saved to the Challenge History tab, where you can view your complete achievement record with points earned, completion dates, and contribution details. **LEARN Screen Integration:** Your earned challenge points are automatically displayed on the LEARN screen progress tile, contributing to your overall birding advancement and badge progression. **Background Processing:** All tracking happens seamlessly in the background using the app\'s existing trip logging and AI identification systems. You don\'t need to remember to manually update challenges - just go birding and log your sightings as usual!',
        topics: ['automatic tracking', 'progress', 'trip logging', 'ai integration', 'habitat detection', 'real-time updates', 'background processing', 'seamless'],
        related: ['48', '50', '1', '22', '23']
    },
    { 
        id: '50',
        question: 'What types of challenges are available and how do I complete them?',
        answer: '**Daily Challenges (Reset at midnight):** Various challenges focusing on immediate birding activities and skill building. Examples include species identification, sound detection, and photography challenges. **Weekly Challenges (Reset Mondays):** Medium-term challenges encouraging exploration and diversity. These include habitat exploration, species collection goals, and discovery of rare species in your area. **Monthly Challenges (Reset 1st of month):** Long-term research and mastery challenges including "Migration Tracker" (document migratory species movements using the Migration Tracking feature), "Behavior Observer" (record detailed bird behaviors using the Behavior Logging feature), and "Master Birder" challenges for experienced users. **How to Complete:** The app features two main tracking systems: **Trip-Based Tracking:** Regular birding activities logged through trip logs, AI sound/photo detection, and manual sightings automatically count toward identification and discovery challenges. **Research-Based Tracking:** Use the dedicated Behavior Logging and Migration Tracking features (found in the ID tab) to contribute toward monthly research challenges. These require detailed observations recorded through specialized logging screens. **Challenge Integration:** When you click on challenge contributions, the app intelligently distinguishes between trip-based observations (which link to trip logs) and research-based observations (which link to behavior/migration log viewers). **Automatic Progress:** All tracking happens automatically - simply use the app\'s features and your challenge progress updates in real-time!',
        topics: ['challenge types', 'daily challenges', 'weekly challenges', 'monthly challenges', 'completion', 'points system', 'difficulty levels', 'migration', 'behavior', 'mastery'],
        related: ['48', '49', '1', '22', '23']
    },
    { 
        id: '51', 
        question: 'How do I use Behavior Logging to record bird behaviors?',
        answer: 'Behavior Logging allows you to record detailed observations of bird behaviors for research and monthly challenges. **Access:** Go to ID > Behavior Logging to start recording observations. **Species Selection:** Choose from common bird species or search for specific birds using the dropdown selector. All species are sourced from comprehensive bird databases. **Behavior Types:** Select from 14 behavior categories including Feeding, Nesting, Social Interaction, Territorial Display, Courtship, Foraging, Preening/Grooming, Flight Behavior, Vocalizing/Singing, Bathing, Roosting/Resting, Aggressive Behavior, Migration Movement, and Other. **Detailed Recording:** Describe what you observed in detail, set the number of birds, record observation duration using the built-in timer, add location names for better organization, note weather conditions, and include additional observation notes. **Smart Timer:** Use the timer feature to accurately track how long you observed the behavior. The timer runs in real-time and automatically sets the duration when stopped. **Challenge Integration:** Behavior observations automatically count toward monthly "Behavior Observer" challenges, helping you complete research-focused goals. **Viewing Logs:** Access all your behavior logs through Logs > Behavior Logs to review past observations, see statistics, and delete entries if needed. **Standalone Activity:** Behavior logging is independent of trips - these are research observations that contribute to challenges and scientific understanding.',
        topics: ['behavior logging', 'bird behavior', 'research', 'observation', 'timer', 'challenges', 'species selection', 'detailed recording', 'logs', 'standalone'],
        related: ['52', '48', '49', '50', '35']
    },
    { 
        id: '52', 
        question: 'How do I use Migration Tracking to record bird movements?',
        answer: 'Migration Tracking helps you document migratory bird movements during seasonal migrations for research and monthly challenges. **Access:** Go to ID > Migration Tracking to record migration observations. **Species Selection:** Choose from migratory bird species including waterfowl (Canada Goose, Mallard), raptors (Broad-winged Hawk, Peregrine Falcon), songbirds (American Robin, Yellow Warbler), and shorebirds (Great Blue Heron, Sandhill Crane). **Migration Status:** Record the bird\'s migration status: Actively Migrating, Staging/Resting, Arriving at Destination, Departing for Migration, Overwintering, At Breeding Grounds, or Vagrant/Off-course. **Movement Details:** Document flock size, direction of movement (North, Northeast, etc.), flight altitude (Very Low to Very High), and time of day observations. **Environmental Conditions:** Add location names, weather conditions, and confidence levels (High, Medium, Low) for your observations. **Seasonal Context:** The app automatically detects the current migration season (Spring, Summer, Fall, Winter) to provide appropriate context. **Challenge Integration:** Migration observations automatically count toward monthly "Migration Tracker" challenges, contributing to seasonal research goals. **Viewing Logs:** Access all your migration logs through Logs > Migration Logs to review observations, see migration statistics by season and direction, and manage your data. **Scientific Value:** Your migration data contributes to understanding bird movement patterns and seasonal behaviors, supporting conservation research.',
        topics: ['migration tracking', 'migratory birds', 'seasonal movement', 'flock size', 'direction', 'altitude', 'challenges', 'environmental conditions', 'logs', 'research'],
        related: ['51', '48', '49', '50', '35']
    },
    { 
        id: '53', 
        question: 'How do I access and manage my Behavior and Migration logs?',
        answer: 'Your behavior and migration observations are stored separately from trip logs and can be accessed through dedicated log viewers. **Accessing Logs:** Go to Logs tab and scroll down to find "Behavior Logs" and "Migration Logs" options. These are separate from your regular birding trip logs. **Behavior Logs Features:** View comprehensive statistics including total logs, species count, average observation duration, and most observed species. See behavior type breakdown showing which behaviors you\'ve recorded most frequently. Browse individual log entries with species names, behavior types, descriptions, duration, location names, weather conditions, and timestamps. **Migration Logs Features:** View migration statistics including total logs, species count, average and largest flock sizes, and most common migration direction. See seasonal distribution showing when you\'ve recorded the most migration activity. Browse detailed migration entries with species, migration status, direction, flock size, altitude, location names, and environmental conditions. **Management Options:** Delete individual logs by tapping the trash icon on any entry. Refresh data by pulling down on the log screens. Search and filter through your observations. **Visual Organization:** Each log entry shows the timestamp, location name prominently, and includes all recorded details. GPS coordinates are shown separately from custom location names for reference. **Data Independence:** These logs are completely separate from your trip-based birding activities, allowing you to maintain dedicated research observations alongside your regular birding trips.',
        topics: ['logs tab', 'behavior logs', 'migration logs', 'statistics', 'data management', 'separate from trips', 'visual organization', 'research data'],
        related: ['51', '52', '6', '13', '48']
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