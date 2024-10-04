export const messages = {
  // Error Code
  0: "Comparator equal (0)",
  1: "Comparator smaller (1)",
  2: "Comparator greater (2)",
  101: "Pool is emergency (101)",
  102: "Add Liquidity Failed (102)",
  103: "Empty coins (103)",
  201: "No permissions pause or resume (201)",
  202: "Already pause  (202)",
  203: "Not Pause (203)",
  301: "No permissions withdraw (301)",
  302: "Pool is emergency (302)",
  303: "Global mismatch (303)",
  401: "Divide by zero (401)",
  402: "U64 overflow (402)",
  500: "Zero amount (500)",
  501: "Not enough amount token (501)",
  502: "Pool was maximum (502)",
  503: "Insufficient amount in coin x reserves (503)",
  504: "Insufficient amount in coin y reserves (504)",
  505: "Over limit liquidity (505)",
  506: "Liquid not enough (506)",
  507: "Can not add liquidity the same coin (507)",
  508: "Pool not yet register (508)",
  509: "Coin must be order (509)",
  510: "U64 overflow (510)",
  511: "Insufficient liquidity minted (511)",
  512: "Add liquidity failed (512)",
  513: "Withdrawal amount exceeds your share balance in this pool (513)",
  514: "Pool does not exist (514)",
  515: "Your transaction may fail. Consider increasing your slippage tolerance (515)",
  516: "Invalid swap (516)",
};

export type MessagesCodes = keyof typeof messages;
