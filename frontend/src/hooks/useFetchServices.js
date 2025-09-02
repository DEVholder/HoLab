import { useState, useEffect } from 'react';

/**
 * 마이크로서비스 목록 데이터를 불러오는 커스텀 훅
 * @returns {{ data: Array, loading: boolean, error: Error|null }}
 */
function useFetchServices() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 이 부분의 URL만 나중에 실제 API 주소로 바꾸면 됩니다.
        const response = await fetch('/services.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (e) {
        setError(e);
        console.error("서비스 데이터를 불러오는 중 오류가 발생했습니다:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // 최초 1회만 실행

  // 컴포넌트에서 사용할 상태들을 객체로 묶어 반환합니다.
  return { data, loading, error };
}

export default useFetchServices;