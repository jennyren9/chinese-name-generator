// In-memory data: surnames, mapping, and characters with tags/meanings
const SURNAMES = [
  '王','李','张','刘','陈','杨','赵','黄','周','吴','徐','孙','马','朱','胡','林','何','高','郭','马','任','罗','梁','宋','郑','谢'
];

const SURNAME_PINYIN_MAP = {
  'wang': '王', 'li': '李', 'zhang': '张', 'liu': '刘', 'chen': '陈', 'yang': '杨', 'zhao': '赵', 'huang': '黄', 'zhou': '周', 'wu': '吴',
  'xu': '徐', 'sun': '孙', 'ma': '马', 'zhu': '朱', 'hu': '胡', 'lin': '林', 'he': '何', 'gao': '高', 'guo': '郭', 'ren': '任', 'luo': '罗', 'liang': '梁', 'song': '宋', 'zheng': '郑', 'xie': '谢'
};

// Characters used to build given names. Each char has: char, pinyin, genders, ages, tags, meaning
const CHARACTERS = [
  { char: '伟', pinyin: 'wei', genders: ['male'], ages: ['adult','child','all'], tags: ['strong','great'], meaning: 'great, lofty' },
  { char: '明', pinyin: 'ming', genders: ['neutral'], ages: ['all'], tags: ['intelligent','bright'], meaning: 'bright, intelligent' },
  { char: '悦', pinyin: 'yue', genders: ['female','neutral'], ages: ['all'], tags: ['gentle','joy'], meaning: 'joyful, delighted' },
  { char: '雅', pinyin: 'ya', genders: ['female','neutral'], ages: ['adult','child'], tags: ['elegant','gentle'], meaning: 'elegant, graceful' },
  { char: '强', pinyin: 'qiang', genders: ['male'], ages: ['all'], tags: ['strong','determined'], meaning: 'strong, powerful' },
  { char: '晨', pinyin: 'chen', genders: ['neutral'], ages: ['all'], tags: ['nature','dawn'], meaning: 'morning, dawn' },
  { char: '轩', pinyin: 'xuan', genders: ['male','neutral'], ages: ['all'], tags: ['elegant','refined'], meaning: 'high, noble' },
  { char: '宁', pinyin: 'ning', genders: ['female','neutral'], ages: ['all'], tags: ['calm','peace'], meaning: 'peaceful, calm' },
  { char: '林', pinyin: 'lin', genders: ['male','female','neutral'], ages: ['all'], tags: ['nature','forest'], meaning: 'forest, woods' },
  { char: '涛', pinyin: 'tao', genders: ['male'], ages: ['all'], tags: ['nature','power'], meaning: 'big waves, powerful' },
  { char: '慧', pinyin: 'hui', genders: ['female','neutral'], ages: ['all'], tags: ['intelligent','wise'], meaning: 'wise, intelligent' },
  { char: '静', pinyin: 'jing', genders: ['female','neutral'], ages: ['all'], tags: ['calm','gentle'], meaning: 'quiet, calm' },
  { char: '晨', pinyin: 'chen', genders: ['male','female','neutral'], ages: ['all'], tags: ['dawn','fresh'], meaning: 'morning, dawn' },
  { char: '彤', pinyin: 'tong', genders: ['female'], ages: ['all'], tags: ['bright','vivid'], meaning: 'red, rosy' },
  { char: '嘉', pinyin: 'jia', genders: ['female','male','neutral'], ages: ['all'], tags: ['good','pleasant'], meaning: 'good, auspicious' },
  { char: '志', pinyin: 'zhi', genders: ['male'], ages: ['all'], tags: ['determined','ambition'], meaning: 'will, ambition' },
  { char: '辰', pinyin: 'chen', genders: ['male','neutral'], ages: ['all'], tags: ['nature','time'], meaning: 'time, morning' },
  { char: '琪', pinyin: 'qi', genders: ['female'], ages: ['all'], tags: ['precious','beautiful'], meaning: 'precious jade' },
  { char: '涵', pinyin: 'han', genders: ['female','neutral'], ages: ['all'], tags: ['cultured','gentle'], meaning: 'to contain, cultured' },
  { char: '昊', pinyin: 'hao', genders: ['male'], ages: ['all'], tags: ['vast','sky','nature'], meaning: 'vast like the sky' }
];

module.exports = { SURNAMES, SURNAME_PINYIN_MAP, CHARACTERS };
