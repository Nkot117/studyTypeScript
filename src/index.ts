// インターセクション型
type Engineer = {
  name: string;
  role: string;
};

type Bologger = {
  name: string;
  follower: number;
};

type EngineerBologger = Engineer & Bologger;
