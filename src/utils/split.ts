/**
 * 
 * @param skill 
 * @returns splited skills
 */

export const split = (skill: string): string[] => {
    let skillSplit = skill.split("*");
    if (skillSplit.length > 1) {
        return skillSplit;
    }
    return [];
}