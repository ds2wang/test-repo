/**
 * IPC_Test_Config
 *
 *
 * @category Testing
 * @package  IPC.Test
 * @author   Rajat Pandit <rajat_pandit@lalaland.com>
 * @license  http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @link     http://ipcmedia.com
 */

function factorial(n)
{
    if (n === 0) {
        return 1;
    }
    
    return (n * factorial(n - 1));

}
