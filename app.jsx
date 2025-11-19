const { useState, useEffect, useRef } = React;
const { createRoot } = ReactDOM;

// Icons Components
const Icon = ({ name, size = 24, color = "currentColor", className = "" }) => {
    useEffect(() => {
        lucide.createIcons();
    });
    return React.createElement('i', {
        'data-lucide': name,
        className: className,
        style: { width: size, height: size, color: color }
    });
};

// البيانات التعليمية - الحروف العربية
const arabicLetters = [
    { 
        letter: 'أ', 
        name: 'ألف', 
        example: 'أرنب',
        emoji: '🐰',
        sound: 'alif',
        color: '#FF6B9D'
    },
    { 
        letter: 'ب', 
        name: 'باء', 
        example: 'بطة',
        emoji: '🦆',
        sound: 'baa',
        color: '#59ADF5'
    },
    { 
        letter: 'ت', 
        name: 'تاء', 
        example: 'تفاحة',
        emoji: '🍎',
        sound: 'taa',
        color: '#FF6B6B'
    },
    { 
        letter: 'ث', 
        name: 'ثاء', 
        example: 'ثعلب',
        emoji: '🦊',
        sound: 'thaa',
        color: '#FFB347'
    },
    { 
        letter: 'ج', 
        name: 'جيم', 
        example: 'جمل',
        emoji: '🐫',
        sound: 'jeem',
        color: '#98D77B'
    },
    { 
        letter: 'ح', 
        name: 'حاء', 
        example: 'حصان',
        emoji: '🐴',
        sound: 'haa',
        color: '#9B59B6'
    },
    { 
        letter: 'خ', 
        name: 'خاء', 
        example: 'خروف',
        emoji: '🐑',
        sound: 'khaa',
        color: '#3498DB'
    },
    { 
        letter: 'د', 
        name: 'دال', 
        example: 'دجاجة',
        emoji: '🐔',
        sound: 'daal',
        color: '#E74C3C'
    },
    { 
        letter: 'ذ', 
        name: 'ذال', 
        example: 'ذئب',
        emoji: '🐺',
        sound: 'thaal',
        color: '#95A5A6'
    },
    { 
        letter: 'ر', 
        name: 'راء', 
        example: 'رمان',
        emoji: '🍇',
        sound: 'raa',
        color: '#E91E63'
    },
    { 
        letter: 'ز', 
        name: 'زاي', 
        example: 'زرافة',
        emoji: '🦒',
        sound: 'zaay',
        color: '#FFA726'
    },
    { 
        letter: 'س', 
        name: 'سين', 
        example: 'سمكة',
        emoji: '🐟',
        sound: 'seen',
        color: '#42A5F5'
    }
];

// مكون الصفحة الرئيسية
const HomePage = ({ onNavigate, userName, stars }) => {
    const lessons = [
        { id: 'letters', title: 'تعلم الحروف', icon: 'book-open', description: 'تعلم الحروف العربية', color: '#59ADF5' },
        { id: 'games', title: 'الألعاب', icon: 'gamepad-2', description: 'ألعاب تفاعلية ممتعة', color: '#98D77B' },
        { id: 'progress', title: 'إنجازاتي', icon: 'award', description: 'شاهد تقدمك ونجومك', color: '#FFB347' }
    ];

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Logo nawa edutech */}
                <div className="text-center mb-8 slide-in">
                    <img 
                        src="nawa-edutech-logo.png" 
                        alt="nawa edutech" 
                        className="mx-auto w-full max-w-md mb-2"
                    />
                </div>
                
                {/* Header */}
                <div className="text-center mb-12 slide-in">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <Icon name="star" size={48} color="#FFD700" className="pulse-animation" />
                        <h1 className="text-5xl md:text-6xl font-bold text-textDark">مرحباً {userName}!</h1>
                        <Icon name="star" size={48} color="#FFD700" className="pulse-animation" />
                    </div>
                    <p className="text-2xl text-textLight">هيا نتعلم العربية معاً!</p>
                    
                    {/* Stars Display */}
                    <div className="mt-6 flex items-center justify-center gap-2">
                        <span className="text-3xl font-bold text-reward">{stars}</span>
                        <Icon name="sparkles" size={32} color="#FFD700" />
                    </div>
                </div>

                {/* Lessons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {lessons.map((lesson, index) => (
                        <div
                            key={lesson.id}
                            onClick={() => onNavigate(lesson.id)}
                            className="bg-white p-8 rounded-2xl card-shadow card-hover cursor-pointer slide-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div 
                                className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: lesson.color + '20' }}
                            >
                                <Icon name={lesson.icon} size={48} color={lesson.color} />
                            </div>
                            <h2 className="text-3xl font-bold text-textDark text-center mb-3">
                                {lesson.title}
                            </h2>
                            <p className="text-xl text-textLight text-center">
                                {lesson.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Fun Animation */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full card-shadow">
                        <Icon name="heart" size={32} color="#FF6B9D" />
                        <span className="text-2xl text-textDark font-semibold">التعلم متعة!</span>
                        <Icon name="smile" size={32} color="#FFB347" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// مكون صفحة تعلم الحروف
const LettersPage = ({ onNavigate, onEarnStar }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);
    const currentLetter = arabicLetters[currentIndex];

    const playSound = () => {
        setShowConfetti(true);
        onEarnStar();
        setTimeout(() => setShowConfetti(false), 1000);
    };

    const nextLetter = () => {
        if (currentIndex < arabicLetters.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevLetter = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => onNavigate('home')}
                        className="flex items-center gap-2 bg-white px-6 py-3 rounded-full card-shadow hover:scale-105 transition-transform"
                    >
                        <Icon name="arrow-right" size={24} color="#59ADF5" />
                        <span className="text-xl font-semibold text-textDark">العودة</span>
                    </button>
                    <h1 className="text-4xl font-bold text-textDark">تعلم الحروف</h1>
                    <div className="w-32"></div>
                </div>

                {/* Progress Bar */}
                <div className="bg-white rounded-full h-4 mb-8 overflow-hidden card-shadow">
                    <div 
                        className="bg-success h-full progress-bar rounded-full"
                        style={{ width: `${((currentIndex + 1) / arabicLetters.length) * 100}%` }}
                    ></div>
                </div>

                {/* Letter Card */}
                <div className="bg-white rounded-2xl card-shadow p-8 md:p-12 mb-8 slide-in">
                    <div className="text-center">
                        {/* The Letter */}
                        <div 
                            className="text-9xl md:text-[200px] font-extrabold mb-6 pulse-animation"
                            style={{ color: currentLetter.color }}
                        >
                            {currentLetter.letter}
                        </div>

                        {/* Letter Name */}
                        <h2 className="text-4xl font-bold text-textDark mb-8">
                            {currentLetter.name}
                        </h2>

                        {/* Example */}
                        <div className="bg-cream rounded-2xl p-8 mb-8">
                            <div className="text-8xl mb-4">{currentLetter.emoji}</div>
                            <p className="text-3xl font-semibold text-textDark">
                                {currentLetter.example}
                            </p>
                        </div>

                        {/* Sound Button */}
                        <button
                            onClick={playSound}
                            className="bg-primary hover:bg-opacity-90 text-white px-12 py-6 rounded-full text-2xl font-bold card-shadow hover:scale-105 transition-transform flex items-center gap-4 mx-auto"
                        >
                            <Icon name="volume-2" size={32} color="white" />
                            <span>استمع للحرف</span>
                        </button>

                        {/* Confetti Animation */}
                        {showConfetti && (
                            <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
                                <Icon name="sparkles" size={200} color="#FFD700" className="pop-animation" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center">
                    <button
                        onClick={prevLetter}
                        disabled={currentIndex === 0}
                        className={`flex items-center gap-3 bg-white px-8 py-4 rounded-full card-shadow text-xl font-semibold ${
                            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 transition-transform'
                        }`}
                    >
                        <Icon name="chevron-right" size={28} color="#59ADF5" />
                        <span className="text-textDark">السابق</span>
                    </button>

                    <div className="text-2xl font-bold text-textDark">
                        {currentIndex + 1} / {arabicLetters.length}
                    </div>

                    <button
                        onClick={nextLetter}
                        disabled={currentIndex === arabicLetters.length - 1}
                        className={`flex items-center gap-3 bg-white px-8 py-4 rounded-full card-shadow text-xl font-semibold ${
                            currentIndex === arabicLetters.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 transition-transform'
                        }`}
                    >
                        <span className="text-textDark">التالي</span>
                        <Icon name="chevron-left" size={28} color="#59ADF5" />
                    </button>
                </div>

                {/* Letter Grid Preview */}
                <div className="mt-12 bg-white rounded-2xl card-shadow p-6">
                    <h3 className="text-2xl font-bold text-textDark mb-6 text-center">جميع الحروف</h3>
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                        {arabicLetters.map((letter, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`aspect-square rounded-xl flex items-center justify-center text-4xl font-bold transition-all ${
                                    index === currentIndex
                                        ? 'bg-primary text-white scale-110 card-shadow'
                                        : 'bg-cream text-textDark hover:scale-105'
                                }`}
                                style={index === currentIndex ? {} : { color: letter.color }}
                            >
                                {letter.letter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// مكون لعبة السحب والإفلات
const DragDropGame = ({ onNavigate, onEarnStar }) => {
    const [gameLetters, setGameLetters] = useState([]);
    const [draggedLetter, setDraggedLetter] = useState(null);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        // اختيار 4 حروف عشوائية للعبة
        const shuffled = [...arabicLetters].sort(() => Math.random() - 0.5).slice(0, 4);
        setGameLetters(shuffled);
    }, []);

    const handleDragStart = (letter) => {
        setDraggedLetter(letter);
    };

    const handleDrop = (targetLetter) => {
        if (draggedLetter && draggedLetter.letter === targetLetter.letter) {
            // إجابة صحيحة
            setMatchedPairs([...matchedPairs, targetLetter.letter]);
            setScore(score + 10);
            setShowSuccess(true);
            onEarnStar();
            setTimeout(() => setShowSuccess(false), 1000);
        } else {
            // إجابة خاطئة - هز العنصر
            const element = document.getElementById(`drop-${targetLetter.letter}`);
            if (element) {
                element.classList.add('shake-animation');
                setTimeout(() => element.classList.remove('shake-animation'), 500);
            }
        }
        setDraggedLetter(null);
    };

    const resetGame = () => {
        const shuffled = [...arabicLetters].sort(() => Math.random() - 0.5).slice(0, 4);
        setGameLetters(shuffled);
        setMatchedPairs([]);
        setScore(0);
    };

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => onNavigate('home')}
                        className="flex items-center gap-2 bg-white px-6 py-3 rounded-full card-shadow hover:scale-105 transition-transform"
                    >
                        <Icon name="arrow-right" size={24} color="#59ADF5" />
                        <span className="text-xl font-semibold text-textDark">العودة</span>
                    </button>
                    <h1 className="text-4xl font-bold text-textDark">لعبة المطابقة</h1>
                    <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full card-shadow">
                        <Icon name="trophy" size={24} color="#FFD700" />
                        <span className="text-xl font-bold text-textDark">{score}</span>
                    </div>
                </div>

                {/* Instructions */}
                <div className="bg-warm bg-opacity-20 rounded-2xl p-6 mb-8 text-center">
                    <p className="text-2xl text-textDark font-semibold">
                        اسحب الحرف إلى الصورة المناسبة!
                    </p>
                </div>

                {/* Game Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Letters to Drag */}
                    <div className="bg-white rounded-2xl card-shadow p-8">
                        <h2 className="text-3xl font-bold text-textDark mb-6 text-center">الحروف</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {gameLetters.map((letter) => (
                                <div
                                    key={letter.letter}
                                    draggable={!matchedPairs.includes(letter.letter)}
                                    onDragStart={() => handleDragStart(letter)}
                                    className={`aspect-square rounded-2xl flex items-center justify-center text-6xl font-bold cursor-move transition-all ${
                                        matchedPairs.includes(letter.letter)
                                            ? 'bg-success text-white'
                                            : 'bg-cream text-textDark hover:scale-110 card-shadow'
                                    }`}
                                    style={{ color: matchedPairs.includes(letter.letter) ? 'white' : letter.color }}
                                >
                                    {letter.letter}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Drop Zones */}
                    <div className="bg-white rounded-2xl card-shadow p-8">
                        <h2 className="text-3xl font-bold text-textDark mb-6 text-center">الصور</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {gameLetters.map((letter) => (
                                <div
                                    key={letter.letter}
                                    id={`drop-${letter.letter}`}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={() => handleDrop(letter)}
                                    className={`aspect-square rounded-2xl flex flex-col items-center justify-center transition-all ${
                                        matchedPairs.includes(letter.letter)
                                            ? 'bg-success'
                                            : 'bg-cream border-4 border-dashed border-textLight'
                                    }`}
                                >
                                    <div className="text-6xl mb-2">{letter.emoji}</div>
                                    <div className="text-xl font-semibold text-textDark">
                                        {letter.example}
                                    </div>
                                    {matchedPairs.includes(letter.letter) && (
                                        <Icon name="check-circle" size={48} color="white" className="mt-2 pop-animation" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Success Message */}
                {showSuccess && (
                    <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
                        <div className="bg-success text-white px-12 py-6 rounded-full text-3xl font-bold card-shadow pop-animation flex items-center gap-4">
                            <Icon name="star" size={48} color="white" />
                            <span>أحسنت!</span>
                            <Icon name="star" size={48} color="white" />
                        </div>
                    </div>
                )}

                {/* Reset Button */}
                {matchedPairs.length === gameLetters.length && gameLetters.length > 0 && (
                    <div className="mt-8 text-center">
                        <button
                            onClick={resetGame}
                            className="bg-primary hover:bg-opacity-90 text-white px-12 py-6 rounded-full text-2xl font-bold card-shadow hover:scale-105 transition-transform flex items-center gap-4 mx-auto pop-animation"
                        >
                            <Icon name="refresh-cw" size={32} color="white" />
                            <span>لعبة جديدة</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

// مكون صفحة التقدم
const ProgressPage = ({ onNavigate, stars, completedLessons }) => {
    const achievements = [
        { id: 1, name: 'أول نجمة', icon: 'star', unlocked: stars >= 1 },
        { id: 2, name: 'متعلم نشيط', icon: 'zap', unlocked: stars >= 5 },
        { id: 3, name: 'عبقري الحروف', icon: 'award', unlocked: completedLessons >= 5 },
        { id: 4, name: 'بطل الألعاب', icon: 'trophy', unlocked: stars >= 10 },
        { id: 5, name: 'نجم ساطع', icon: 'sparkles', unlocked: stars >= 20 },
        { id: 6, name: 'خبير اللغة', icon: 'medal', unlocked: completedLessons >= 10 }
    ];

    const unlockedCount = achievements.filter(a => a.unlocked).length;

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => onNavigate('home')}
                        className="flex items-center gap-2 bg-white px-6 py-3 rounded-full card-shadow hover:scale-105 transition-transform"
                    >
                        <Icon name="arrow-right" size={24} color="#59ADF5" />
                        <span className="text-xl font-semibold text-textDark">العودة</span>
                    </button>
                    <h1 className="text-4xl font-bold text-textDark">إنجازاتي</h1>
                    <div className="w-32"></div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-2xl card-shadow p-6 text-center slide-in">
                        <Icon name="star" size={48} color="#FFD700" className="mx-auto mb-4" />
                        <div className="text-5xl font-bold text-reward mb-2">{stars}</div>
                        <div className="text-xl text-textLight">نجمة مكتسبة</div>
                    </div>
                    <div className="bg-white rounded-2xl card-shadow p-6 text-center slide-in" style={{ animationDelay: '0.1s' }}>
                        <Icon name="book-open" size={48} color="#59ADF5" className="mx-auto mb-4" />
                        <div className="text-5xl font-bold text-primary mb-2">{completedLessons}</div>
                        <div className="text-xl text-textLight">درس مكتمل</div>
                    </div>
                    <div className="bg-white rounded-2xl card-shadow p-6 text-center slide-in" style={{ animationDelay: '0.2s' }}>
                        <Icon name="award" size={48} color="#FFB347" className="mx-auto mb-4" />
                        <div className="text-5xl font-bold text-warm mb-2">{unlockedCount}</div>
                        <div className="text-xl text-textLight">إنجاز مفتوح</div>
                    </div>
                </div>

                {/* Progress Chart */}
                <div className="bg-white rounded-2xl card-shadow p-8 mb-12">
                    <h2 className="text-3xl font-bold text-textDark mb-6 text-center">تقدمك في تعلم الحروف</h2>
                    <div className="space-y-4">
                        {[
                            { name: 'الحروف المتعلمة', value: completedLessons, max: 12, color: '#59ADF5' },
                            { name: 'الألعاب المكتملة', value: Math.min(stars / 2, 10), max: 10, color: '#98D77B' },
                            { name: 'النجوم المكتسبة', value: stars, max: 30, color: '#FFD700' }
                        ].map((item, index) => (
                            <div key={index} className="slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-xl font-semibold text-textDark">{item.name}</span>
                                    <span className="text-xl font-bold" style={{ color: item.color }}>
                                        {Math.round(item.value)} / {item.max}
                                    </span>
                                </div>
                                <div className="bg-cream rounded-full h-6 overflow-hidden">
                                    <div 
                                        className="h-full progress-bar rounded-full"
                                        style={{ 
                                            width: `${(item.value / item.max) * 100}%`,
                                            backgroundColor: item.color
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="bg-white rounded-2xl card-shadow p-8">
                    <h2 className="text-3xl font-bold text-textDark mb-8 text-center">شاراتي</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => (
                            <div
                                key={achievement.id}
                                className={`p-6 rounded-2xl text-center transition-all slide-in ${
                                    achievement.unlocked
                                        ? 'bg-gradient-to-br from-reward to-warm card-shadow'
                                        : 'bg-cream opacity-50'
                                }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                                    achievement.unlocked ? 'bg-white' : 'bg-gray-300'
                                }`}>
                                    <Icon 
                                        name={achievement.icon} 
                                        size={40} 
                                        color={achievement.unlocked ? '#FFD700' : '#999'}
                                    />
                                </div>
                                <div className={`text-lg font-bold ${
                                    achievement.unlocked ? 'text-white' : 'text-textLight'
                                }`}>
                                    {achievement.name}
                                </div>
                                {achievement.unlocked && (
                                    <div className="mt-2">
                                        <Icon name="check-circle" size={24} color="white" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Motivational Message */}
                <div className="mt-12 text-center">
                    <div className="inline-block bg-gradient-to-r from-primary to-success text-white px-12 py-6 rounded-full card-shadow">
                        <p className="text-2xl font-bold">استمر في التعلم! أنت رائع! 🎉</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// المكون الرئيسي
const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [userName] = useState('أحمد');
    const [stars, setStars] = useState(0);
    const [completedLessons, setCompletedLessons] = useState(0);

    const handleEarnStar = () => {
        setStars(prev => prev + 1);
        if (Math.random() > 0.7) {
            setCompletedLessons(prev => prev + 1);
        }
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={setCurrentPage} userName={userName} stars={stars} />;
            case 'letters':
                return <LettersPage onNavigate={setCurrentPage} onEarnStar={handleEarnStar} />;
            case 'games':
                return <DragDropGame onNavigate={setCurrentPage} onEarnStar={handleEarnStar} />;
            case 'progress':
                return <ProgressPage onNavigate={setCurrentPage} stars={stars} completedLessons={completedLessons} />;
            default:
                return <HomePage onNavigate={setCurrentPage} userName={userName} stars={stars} />;
        }
    };

    return (
        <div className="font-baloo">
            {renderPage()}
        </div>
    );
};

// Render the app
const root = createRoot(document.getElementById('root'));
root.render(<App />);
