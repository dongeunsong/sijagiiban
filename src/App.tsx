import { useState } from 'react';
import HomeScreen from './app/components/HomeScreen';
import RoutineRegisterScreen from './app/components/RoutineRegisterScreen';
import AlarmSettingScreen from './app/components/AlarmSettingScreen';
import RoutineStartScreen from './app/components/RoutineStartScreen';
import LocationVerificationScreen from './app/components/LocationVerificationScreen';
import PhotoVerificationScreen from './app/components/PhotoVerificationScreen';
import AchievementCompleteScreen from './app/components/AchievementCompleteScreen';
import MyPageScreen from './app/components/MyPageScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screenNames = [
    '홈 화면',
    '루틴 등록',
    '알람 설정',
    '루틴 시작',
    '위치 인증',
    '사진 인증',
    '달성 완료',
    '마이페이지',
  ];

  const renderScreen = () => {
    switch (currentScreen) {
      case 0:
        return <HomeScreen />;
      case 1:
        return <RoutineRegisterScreen />;
      case 2:
        return <AlarmSettingScreen />;
      case 3:
        return (
          <RoutineStartScreen
            onOpenLocation={() => setCurrentScreen(4)}
            onOpenPhoto={() => setCurrentScreen(5)}
          />
        );
      case 4:
        return <LocationVerificationScreen onBack={() => setCurrentScreen(3)} />;
      case 5:
        return <PhotoVerificationScreen onBack={() => setCurrentScreen(3)} />;
      case 6:
        return <AchievementCompleteScreen />;
      case 7:
        return <MyPageScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="size-full bg-gray-100 flex flex-col items-center justify-center p-8 overflow-auto">
      <div className="flex gap-2 mb-6 flex-wrap justify-center max-w-4xl">
        {screenNames.map((name, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentScreen(index)}
            className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all ${
              currentScreen === index
                ? 'bg-[#1D9E75] text-white shadow-lg shadow-[#1D9E75]/20'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="shadow-2xl rounded-3xl overflow-hidden">{renderScreen()}</div>
    </div>
  );
}
