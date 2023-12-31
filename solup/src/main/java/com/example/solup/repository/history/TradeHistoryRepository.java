package com.example.solup.repository.history;

import com.example.solup.entity.history.TradeHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import org.springframework.data.repository.query.Param;

public interface TradeHistoryRepository extends JpaRepository<TradeHistory,Long> {
    List<TradeHistory> findByAccountId(Long accountId);

    TradeHistory findByIdAndAccountId(Long tradeHistoryId, Long accountId);

    List<TradeHistory> findByAccountIdAndIsCategorized(Long accountId, Boolean isCategorized);

    List<TradeHistory> findByAccountIdAndIsCategorizedAndCategory(Long accountId, Boolean isCategorized, Integer category);

    @Query("SELECT COALESCE(SUM(th.deposit), 0) FROM TradeHistory th WHERE FUNCTION('YEAR', th.tradeDate) = FUNCTION('YEAR', CURRENT_DATE) AND FUNCTION('MONTH', th.tradeDate) = FUNCTION('MONTH', CURRENT_DATE) AND th.category = 1 AND th.account.id = ?1")
//    @Query("SELECT COALESCE(SUM(th.deposit), 0) FROM TradeHistory th WHERE YEAR(th.tradeDate) = YEAR(current_date) AND MONTH(th.tradeDate) = MONTH(current_date) AND th.category = 1 AND th.account.id = ?1")
    Integer getCurrentMonthIncome(Long accountId);

    @Query("SELECT COALESCE(SUM(th.withdraw), 0) FROM TradeHistory th WHERE FUNCTION('YEAR', th.tradeDate) = FUNCTION('YEAR', CURRENT_DATE) AND FUNCTION('MONTH', th.tradeDate) = FUNCTION('MONTH', CURRENT_DATE) AND th.category = 2 AND th.fixed IS NOT NULL AND th.account.id = ?1")
    Integer getCurrentMonthFixed(Long accountId);

    @Query("SELECT COALESCE(SUM(th.withdraw), 0) FROM TradeHistory th WHERE FUNCTION('YEAR', th.tradeDate) = FUNCTION('YEAR', CURRENT_DATE) AND FUNCTION('MONTH', th.tradeDate) = FUNCTION('MONTH', CURRENT_DATE) AND th.category = 2 AND th.variable IS NOT NULL AND th.account.id = ?1")
    Integer getCurrentMonthVariable(Long accountId);

    TradeHistory findFirstByAccountIdOrderByIdDesc(Long accountId);

    List<TradeHistory> findByBriefsAndContentAndCategoryAndIsCategorized(String briefs, String content, Integer category, Boolean isCategorized);

    @Query("SELECT th FROM TradeHistory th WHERE th.account.id = ?1 AND th.isCategorized = true AND th.variable IS NOT NULL")
    List<TradeHistory> findCategorizedVariable(Long accountId);

    @Query("SELECT th FROM TradeHistory th WHERE th.account.id = ?1 AND th.isCategorized = true AND th.fixed IS NOT NULL")
    List<TradeHistory> findCategorizedFixed(Long accountId);

    @Query("SELECT th FROM TradeHistory th WHERE th.account.id = ?1 AND th.living IS NOT NULL")
    List<TradeHistory> findLiving(Long accountId);
}
