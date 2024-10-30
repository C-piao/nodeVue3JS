// 获取assets静态资源
export const getAssetsFile = (path: string, url: string) => {
  return new URL(`../assets/images/${path}/${url}`, import.meta.url).href;
};

// 手机号检验
export const validatePhone = (phone: string) => {
  const regex = /^1[3-9]\d{9}$/;
  return regex.test(phone);
};

// 当前时间
export const getNowTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() >= 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`;
  const date = now.getDate() >= 10 ? now.getDate() : `0${now.getDate()}`;
  // const hour = now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`
  // const minutes = now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`
  // const seconds = now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`
  return `${year}-${month}-${date}`;
};

export const chunkArray = (chunkSize: number, array: any) => {
  const chunks: any = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
};
