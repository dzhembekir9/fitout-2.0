import React from 'react'
import css from './SizeChart.module.css'
import cn from 'classnames'
import { Modal } from '../../../Common'

export const SizeChart = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal onClose={onClose} width="1400px">
      <div className="px-36 py-14">
        <h2 className="text-4xl font-bold tracking-wide mb-3">
          Fitout Size Chart
        </h2>
        <p className="mb-4.5 text-lg">
          Fitout fit true to size for most customers. If you have wide feet or
          are between sizes, we suggest you size up for all styles except our
          Tree Runner (size down for those).
        </p>
        <div className="mb-9">
          <h4 className="font-bold tracking-widest mb-3">MEN&apos;S SHOES</h4>
          <table className={css.Table}>
            <tbody>
              <tr className={css.Row}>
                <th className={cn(css.CellHeading, css.Cell)}>US</th>
                <td className={css.Cell}>8</td>
                <td className={css.Cell}>9</td>
                <td className={css.Cell}>10</td>
                <td className={css.Cell}>11</td>
                <td className={css.Cell}>12</td>
                <td className={css.Cell}>13</td>
                <td className={css.Cell}>14</td>
              </tr>
              <tr className={css.Row}>
                <th className={cn(css.CellHeading, css.Cell)}>UK</th>
                <td className={css.Cell}>7</td>
                <td className={css.Cell}>8</td>
                <td className={css.Cell}>9</td>
                <td className={css.Cell}>10</td>
                <td className={css.Cell}>11</td>
                <td className={css.Cell}>12</td>
                <td className={css.Cell}>13</td>
              </tr>
              <tr className={css.Row}>
                <th className={cn(css.CellHeading, css.Cell)}>EU</th>
                <td className={css.Cell}>41</td>
                <td className={css.Cell}>42</td>
                <td className={css.Cell}>43</td>
                <td className={css.Cell}>44</td>
                <td className={css.Cell}>45</td>
                <td className={css.Cell}>46</td>
                <td className={css.Cell}>47</td>
              </tr>
              <tr className={css.Row}>
                <th className={cn(css.CellHeading, css.Cell)}>cm</th>
                <td className={css.Cell}>26</td>
                <td className={css.Cell}>27</td>
                <td className={css.Cell}>28</td>
                <td className={css.Cell}>29</td>
                <td className={css.Cell}>30</td>
                <td className={css.Cell}>31</td>
                <td className={css.Cell}>32</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-9">
          <h4 className="font-bold tracking-widest mb-3">WOMEN&apos;S SHOES</h4>
          <table className={css.Table}>
            <tbody>
              <tr className={css.Row}>
                <th className={cn(css.CellHeading, css.Cell)}>US</th>
                <td className={css.Cell}>5</td>
                <td className={css.Cell}>6</td>
                <td className={css.Cell}>7</td>
                <td className={css.Cell}>8</td>
                <td className={css.Cell}>9</td>
                <td className={css.Cell}>10</td>
                <td className={css.Cell}>11</td>
              </tr>
              <tr className={css.Row}>
                <th className={cn(css.CellHeading, css.Cell)}>UK</th>
                <td className={css.Cell}>2 - 2.5</td>
                <td className={css.Cell}>3 - 3.5</td>
                <td className={css.Cell}>4 - 4.5</td>
                <td className={css.Cell}>5 - 5.5</td>
                <td className={css.Cell}>6 - 6.5</td>
                <td className={css.Cell}>7 - 7.5</td>
                <td className={css.Cell}>8 - 8.5</td>
              </tr>
              <tr className={css.Row}>
                <th className={cn(css.CellHeading, css.Cell)}>EU</th>
                <td className={css.Cell}>35</td>
                <td className={css.Cell}>36</td>
                <td className={css.Cell}>37</td>
                <td className={css.Cell}>38</td>
                <td className={css.Cell}>39</td>
                <td className={css.Cell}>40</td>
                <td className={css.Cell}>41</td>
              </tr>
              <tr className={css.Row}>
                <th className={cn(css.CellHeading, css.Cell)}>cm</th>
                <td className={css.Cell}>22</td>
                <td className={css.Cell}>23</td>
                <td className={css.Cell}>24</td>
                <td className={css.Cell}>25</td>
                <td className={css.Cell}>26</td>
                <td className={css.Cell}>27</td>
                <td className={css.Cell}>28</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4.5">
          Still debating? No worries - our hassle-free 30-day return policy
          allows you to try us on for size and find the perfect pair.
        </p>
      </div>
    </Modal>
  )
}
