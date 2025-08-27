import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, '../public')));





// JSON 파싱 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 메인 페이지 라우트
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// 설문 결과 저장 및 분석 API
app.post('/api/survey', (req, res) => {
  try {
    const surveyData = req.body;
    
    // 설문 결과 분석
    const analysis = analyzeSurveyResults(surveyData);
    
    res.json({
      success: true,
      analysis: analysis,
      message: '설문이 성공적으로 제출되었습니다!'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '설문 처리 중 오류가 발생했습니다.'
    });
  }
});

// 설문 결과 분석 함수
function analyzeSurveyResults(data: any) {
  const analysis = {
    musicPersonality: '',
    topGenres: [] as string[],
    listeningHabits: '',
    emotionalProfile: '',
    recommendations: [] as string[]
  };

  // 음악 성격 분석
  if (data.genres && data.genres.length > 0) {
    analysis.topGenres = data.genres.slice(0, 3);
    
    if (data.genres.includes('힙합') || data.genres.includes('R&B')) {
      analysis.musicPersonality = '리듬감 넘치는 트렌디한 음악 애호가';
    } else if (data.genres.includes('클래식') || data.genres.includes('재즈')) {
      analysis.musicPersonality = '세련되고 깊이 있는 음악을 추구하는 지성파';
    } else if (data.genres.includes('K-POP') || data.genres.includes('팝')) {
      analysis.musicPersonality = '밝고 경쾌한 음악으로 에너지를 얻는 활발한 성격';
    } else {
      analysis.musicPersonality = '다양한 장르를 아우르는 열린 마음을 가진 음악 애호가';
    }
  }

  // 청취 습관 분석
  if (data.listeningTime === '4시간 이상') {
    analysis.listeningHabits = '음악 없이는 살 수 없는 진정한 음악 애호가';
  } else if (data.listeningTime === '2-4시간') {
    analysis.listeningHabits = '적당한 음악과 함께하는 균형잡힌 라이프스타일';
  } else {
    analysis.listeningHabits = '선택적으로 음악을 즐기는 신중한 청취자';
  }

  // 감정 프로필 분석
  const emotionalScores = {
    happy: data.happyMusic ? 1 : 0,
    sad: data.sadMusic ? 1 : 0,
    focus: data.focusMusic ? 1 : 0,
    sleep: data.sleepMusic ? 1 : 0,
    workout: data.workoutMusic ? 1 : 0
  };

  const totalScore = Object.values(emotionalScores).reduce((a, b) => a + b, 0);
  
  if (totalScore >= 4) {
    analysis.emotionalProfile = '감정에 따라 음악을 선택하는 섬세한 감성의 소유자';
  } else if (totalScore >= 2) {
    analysis.emotionalProfile = '상황에 맞는 음악을 아는 실용적인 음악 애호가';
  } else {
    analysis.emotionalProfile = '자신만의 음악 취향을 확고히 가진 독립적인 청취자';
  }

  // 추천 장르
  if (data.genres) {
    const recommendations = ['인디', '어쿠스틱', '일렉트로닉', '로큰롤', '포크'];
    analysis.recommendations = recommendations.filter(rec => !data.genres.includes(rec)).slice(0, 2);
  }

  return analysis;
}

app.listen(PORT, () => {
  console.log(`🎵 음악취향 설문 서버가 http://localhost:${PORT} 에서 실행 중입니다!`);
  console.log(`📁 정적 파일 경로: ${path.join(__dirname, '../public')}`);
}); 